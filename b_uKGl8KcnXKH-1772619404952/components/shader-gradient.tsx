"use client"

import { useEffect, useRef } from "react"

const VERT = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const FRAG = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  // simplex-style noise helpers
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 mouse = u_mouse;

    // distance from mouse for distortion
    float d = distance(st, mouse);
    float mouseInfluence = smoothstep(0.5, 0.0, d) * 0.3;

    // displaced coordinates
    vec2 pos = st * 2.5;
    pos.x += u_time * 0.08;
    pos.y += sin(u_time * 0.12) * 0.3;

    // mouse displacement
    pos += (mouse - st) * mouseInfluence * 2.0;

    float n1 = snoise(pos * 1.2 + u_time * 0.05);
    float n2 = snoise(pos * 2.4 - u_time * 0.08 + 3.0);
    float n3 = snoise(pos * 0.6 + u_time * 0.03 + 7.0);

    float blend = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

    // green-based palette
    vec3 c1 = vec3(0.04, 0.06, 0.04);  // deep dark green-black
    vec3 c2 = vec3(0.08, 0.32, 0.18);  // mid green
    vec3 c3 = vec3(0.35, 0.75, 0.45);  // bright green
    vec3 c4 = vec3(0.05, 0.15, 0.12);  // dark teal green

    vec3 color;
    float t = blend * 0.5 + 0.5;
    t += mouseInfluence * 0.4;

    if (t < 0.35) {
      color = mix(c1, c4, t / 0.35);
    } else if (t < 0.6) {
      color = mix(c4, c2, (t - 0.35) / 0.25);
    } else {
      color = mix(c2, c3, (t - 0.6) / 0.4);
    }

    // subtle vignette
    float vignette = 1.0 - smoothstep(0.4, 1.4, length(st - 0.5) * 1.6);
    color *= vignette * 0.85 + 0.15;

    // keep it subtle -- blend with the dark bg
    color = mix(vec3(0.04, 0.04, 0.04), color, 0.7);

    gl_FragColor = vec4(color, 1.0);
  }
`

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, source)
  gl.compileShader(s)
  return s
}

export function ShaderGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const targetRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current!
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false })
    if (!gl) return

    const vs = createShader(gl, gl.VERTEX_SHADER, VERT)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAG)

    const prog = gl.createProgram()!
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, "a_position")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "u_resolution")
    const uTime = gl.getUniformLocation(prog, "u_time")
    const uMouse = gl.getUniformLocation(prog, "u_mouse")

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      targetRef.current = {
        x: (e.clientX - r.left) / r.width,
        y: 1 - (e.clientY - r.top) / r.height,
      }
    }
    window.addEventListener("mousemove", onMove)

    let frame: number
    const start = performance.now()

    const loop = () => {
      // smooth lerp mouse
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.04
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.04

      const t = (performance.now() - start) / 1000
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, t)
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      frame = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
