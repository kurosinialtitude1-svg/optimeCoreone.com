'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { InnerPageFooter } from '@/components/inner-page-layout';

// ─── Color Palette ───────────────────────────────────────────────
// Anti-Flash White : #F2F1F0  (page background)
// Columbia Blue    : #C5D7D9  (card backgrounds, light fills)
// Opal             : #A8BDBF  (secondary accents, subtle text)
// Ming             : #3F7373  (primary accent, CTAs, active states)
// Palm Leaf        : #768C45  (trend indicators, highlights)
// ─────────────────────────────────────────────────────────────────

interface GPUMetric {
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

const architectureNodes = [
  {
    id: "H100_TensorCore",
    title: "H100 Tensor Core",
    sub: "Fourth-Gen Tensor Cores",
    desc: "FP8 precision delivers 4 petaFLOPS of dense AI compute. 132 SMs with 16,896 CUDA cores for industrial-scale workloads.",
    metrics: ["1.9TB/s HBM3", "50M L2 Cache", "PCIe Gen5"],
    tech: "Transformer Engine"
  },
  {
    id: "NVLink_Switch",
    title: "NVLink Switch",
    sub: "Fourth-Gen NVLink",
    desc: "900 GB/s GPU-to-GPU bandwidth. Create massive GPU clusters with 256 GB/s per connection and unified shared memory.",
    metrics: ["900GB/s bidirectional", "7 Links per GPU", "Shared Memory Pool"],
    tech: "NVSwitch v3"
  },
  {
    id: "DeepStream",
    title: "DeepStream SDK",
    sub: "6.3 Release",
    desc: "Real-time video analytics pipeline with 200+ FPS on 4K streams. Multi-stream hardware decoder for factory vision tasks.",
    metrics: ["200+ FPS 4K", "12 Streams/GPU", "<5ms Pipeline"],
    tech: "Hardware Decode"
  },
  {
    id: "TensorRT",
    title: "TensorRT-LLM",
    sub: "v0.7.0 Optimizations",
    desc: "Quantization-aware training with FP8. 4.6x faster inference versus PyTorch for production optimization LLMs.",
    metrics: ["4.6x Speedup", "FP8 Support", "Paged KV Cache"],
    tech: "Quantization"
  },
  {
    id: "Metropolis",
    title: "Metropolis Microservices",
    sub: "Kubernetes Native",
    desc: "Containerized vision AI with NVIDIA Fleet Command. Zero-trust security with GPU isolation for enterprise deployments.",
    metrics: ["K8s Native", "Fleet Management", "Zero-Trust"],
    tech: "Edge AI"
  }
];

export function OptimeCoreProduct() {
  const [activeGPUNode, setActiveGPUNode] = useState<number>(0);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const gpuMetrics: GPUMetric[] = [
    { label: "CUDA Core Utilization", value: 94.2, unit: "%",    trend: "up",     color: "#3F7373" },
    { label: "TensorRT Throughput",   value: 2.4,  unit: "TB/s", trend: "up",     color: "#768C45" },
    { label: "Inference Latency",     value: 1.2,  unit: "ms",   trend: "down",   color: "#3F7373" },
    { label: "Memory Bandwidth",      value: 3.1,  unit: "TB/s", trend: "stable", color: "#A8BDBF" },
    { label: "Power Efficiency",      value: 98.7, unit: "%",    trend: "up",     color: "#768C45" },
    { label: "Thermal Headroom",      value: 23.4, unit: "°C",   trend: "down",   color: "#A8BDBF" }
  ];

  // Canvas GPU visualization
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    const width = canvas.width;
    const height = canvas.height;

    const drawMap = () => {
      ctx.clearRect(0, 0, width, height);

      // Blueprint grid
      ctx.strokeStyle = '#3F7373';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.12;
      for (let i = 0; i <= 20; i++) {
        ctx.beginPath(); ctx.moveTo(i * (width / 20), 0); ctx.lineTo(i * (width / 20), height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i * (height / 20)); ctx.lineTo(width, i * (height / 20)); ctx.stroke();
      }

      architectureNodes.forEach((node, index) => {
        const x = 120 + index * 220;
        const y = 160;

        if (index === activeGPUNode) {
          const g = ctx.createRadialGradient(x, y, 0, x, y, 90);
          g.addColorStop(0, 'rgba(63,115,115,0.25)');
          g.addColorStop(1, 'rgba(63,115,115,0)');
          ctx.globalAlpha = 1;
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(x, y, 90, 0, Math.PI * 2); ctx.fill();
        }

        ctx.globalAlpha = index === activeGPUNode ? 1 : 0.35;
        ctx.fillStyle = index === activeGPUNode ? '#3F7373' : '#A8BDBF';
        ctx.beginPath(); ctx.arc(x, y, 18, 0, Math.PI * 2); ctx.fill();

        if (index < architectureNodes.length - 1) {
          ctx.globalAlpha = 0.2;
          ctx.strokeStyle = '#3F7373'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(x + 18, y); ctx.lineTo(x + 202, y); ctx.stroke();
          const dotPos = ((Date.now() / 500) % 1) * 180;
          ctx.globalAlpha = 0.9;
          ctx.fillStyle = '#768C45';
          ctx.beginPath(); ctx.arc(x + 18 + dotPos, y, 4, 0, Math.PI * 2); ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(drawMap);
    };

    drawMap();
    return () => cancelAnimationFrame(animationFrame);
  }, [activeGPUNode]);

  return (
    <div className="min-h-screen bg-[#F2F1F0] text-[#1A1A1A] font-['Cinzel'] selection:bg-[#3F7373] selection:text-[#F2F1F0] antialiased">

      {/* ── Main Navbar ─────────────────────────────────────── */}
      <Navbar />

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4  w-[700px] h-[700px] bg-[#C5D7D9]/40 blur-[160px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#A8BDBF]/30 blur-[160px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'linear-gradient(#3F7373 1px, transparent 1px), linear-gradient(90deg, #3F7373 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F7373]/40 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#768C45]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-28 pb-32">
          {/* Status badge */}
          <div className="flex items-center gap-4 mb-14 border border-[#3F7373]/20 w-fit px-8 py-3 rounded-full bg-white/60 backdrop-blur-sm shadow-sm">
            <span className="text-[10px] font-mono text-[#3F7373] tracking-[0.5em] uppercase font-black">[ NVIDIA DGX H100 ]</span>
            <div className="h-3 w-px bg-[#3F7373]/20" />
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#768C45] animate-ping" />
              <span className="text-[10px] font-mono text-[#A8BDBF] uppercase">FP8 Quantization: Active</span>
            </div>
          </div>

          {/* Title */}
          <div className="mb-14">
            <h1 className="text-8xl md:text-[160px] font-black tracking-[-0.03em] leading-[0.85] uppercase font-['Cinzel']">
              <span className="text-[#1A1A1A]">NVIDIA</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">
                CORE.
              </span>
              <sup className="text-sm font-mono bg-[#3F7373] text-[#F2F1F0] px-3 py-1 rounded-full align-super ml-4 shadow-lg">H100</sup>
            </h1>
          </div>

          {/* GPU Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
            {gpuMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredMetric(metric.label)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <div className="bg-white/70 backdrop-blur-sm border border-[#3F7373]/15 p-5 rounded-2xl hover:border-[#3F7373]/50 hover:shadow-lg hover:shadow-[#3F7373]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-[8px] font-mono text-[#A8BDBF] mb-3 tracking-widest uppercase font-black">{metric.label}</div>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-black text-[#1A1A1A]">{metric.value}</span>
                    <span className="text-[10px] font-mono text-[#A8BDBF] mb-1">{metric.unit}</span>
                  </div>
                  {/* Trend */}
                  <div className="absolute top-3 right-3">
                    {metric.trend === 'up' && <span className="text-[#768C45] text-xs font-black">↑</span>}
                    {metric.trend === 'down' && <span className="text-[#3F7373] text-xs font-black">↓</span>}
                    {metric.trend === 'stable' && <span className="text-[#A8BDBF] text-xs font-black">→</span>}
                  </div>
                  {/* Hover fill */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3F7373]/5 rounded-b-2xl overflow-hidden">
                    <div className="h-full bg-[#3F7373] transition-all duration-700 rounded-full"
                      style={{ width: hoveredMetric === metric.label ? `${metric.value}%` : '0%' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-8">
            <button className="group relative bg-[#3F7373] text-[#F2F1F0] px-16 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] overflow-hidden shadow-2xl shadow-[#3F7373]/30 hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Deploy H100 Cluster</span>
              <div className="absolute inset-0 bg-[#768C45] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />
            </button>
            <div className="flex items-center gap-6 text-[10px] font-mono">
              {["1.9TB/s HBM3", "4 PFLOPS FP8", "NVLink 900GB/s"].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3F7373] rounded-full" />
                  <span className="text-[#A8BDBF] font-bold">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. GPU ARCHITECTURE CANVAS ───────────────────────────── */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#3F7373 1px,transparent 1px), linear-gradient(90deg, #3F7373 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-[#3F7373] tracking-[0.6em] uppercase font-black">NVIDIA ARCHITECTURE</span>
                <span className="px-3 py-1 border border-[#3F7373] bg-[#3F7373]/5 rounded-full text-[8px] font-mono text-[#3F7373] font-black">BLACKWELL READY</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
                GPU Compute{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] to-[#768C45]">Fabric</span>
              </h2>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-[#A8BDBF] mb-2 font-black">ARCHITECTURE STATUS</div>
              <div className="flex items-center justify-end gap-2">
                <div className="w-2 h-2 bg-[#768C45] rounded-full animate-pulse" />
                <span className="text-sm font-mono text-[#3F7373] font-black">H100 SXM5 · 700W</span>
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="relative mb-16 p-12 border border-[#3F7373]/15 bg-[#F2F1F0] rounded-[2rem] shadow-inner overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C5D7D9]/20 to-transparent rounded-[2rem]" />
            <canvas ref={canvasRef} width={1200} height={350} className="w-full h-auto relative z-10" />
            {/* Labels */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 md:gap-16">
              {architectureNodes.map((node, idx) => (
                <button key={node.id}
                  onMouseEnter={() => setActiveGPUNode(idx)}
                  className={`text-[9px] font-mono uppercase tracking-widest transition-all duration-300 font-black ${
                    activeGPUNode === idx ? 'text-[#3F7373]' : 'text-[#A8BDBF] hover:text-[#3F7373]'
                  }`}
                >
                  {node.id.split('_')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Node Detail */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="text-[10px] font-mono text-[#768C45] tracking-[0.4em] font-black">{architectureNodes[activeGPUNode].id}</div>
              <h3 className="text-4xl md:text-5xl font-black uppercase text-[#1A1A1A] tracking-tighter leading-none">
                {architectureNodes[activeGPUNode].title}
                <span className="block text-sm font-sans font-medium text-[#A8BDBF] mt-3 normal-case tracking-normal">
                  {architectureNodes[activeGPUNode].sub}
                </span>
              </h3>
              <p className="text-[#A8BDBF] font-sans leading-relaxed text-base">{architectureNodes[activeGPUNode].desc}</p>
            </div>
            <div className="border-l border-[#3F7373]/15 pl-12">
              <div className="text-[10px] font-mono text-[#A8BDBF] mb-8 font-black tracking-[0.3em]">TECHNICAL SPECIFICATIONS</div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {architectureNodes[activeGPUNode].metrics.map((m, i) => (
                  <div key={i} className="border border-[#3F7373]/15 p-5 rounded-xl bg-[#F2F1F0]">
                    <div className="text-[8px] font-mono text-[#A8BDBF] mb-2 font-black">PARAM_{i + 1}</div>
                    <div className="text-sm font-mono text-[#3F7373] font-black">{m}</div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-[#3F7373]/5 border border-[#3F7373]/20 rounded-xl">
                <div className="text-[8px] font-mono text-[#3F7373] uppercase font-black mb-1">Active Technology</div>
                <div className="text-sm font-mono text-[#1A1A1A] font-black">{architectureNodes[activeGPUNode].tech}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DEEP LEARNING OPTIMIZATIONS ───────────────────────── */}
      <section className="py-32 px-6 bg-[#F2F1F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[10px] font-mono text-[#3F7373] tracking-[0.6em] mb-6 font-black">NVIDIA OPTIMIZATIONS</div>
            <h2 className="text-6xl md:text-7xl font-black uppercase text-[#1A1A1A] tracking-tighter leading-none">
              Deep{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">Learning</span>
            </h2>
            <p className="text-[#A8BDBF] text-lg mt-6 max-w-2xl mx-auto font-sans italic">
              Maximum performance with NVIDIA's latest software optimizations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                n: "01", title: "TensorRT-LLM", sub: "FP8 · PAGED KV CACHE", accent: "#3F7373",
                desc: "4.6× faster inference vs PyTorch. In-flight batching and quantized attention mechanisms for transformer models.",
                stat: "4.6×", statLabel: "Speedup"
              },
              {
                n: "02", title: "CUDA 12.0", sub: "DPX · HOPPER ARCH", accent: "#768C45",
                desc: "Dynamic programming accelerators for path optimization. 7× faster Floyd-Warshall algorithm implementation.",
                stat: "7×", statLabel: "DPX Speedup"
              },
              {
                n: "03", title: "DeepStream 6.3", sub: "METROPOLIS · FLEET", accent: "#A8BDBF",
                desc: "Multi-stream hardware decoder. 200+ FPS on 4K streams with 12 concurrent pipelines per GPU.",
                stat: "200+ FPS", statLabel: "4K Streams"
              }
            ].map((card) => (
              <div key={card.n} className="group relative p-10 border border-[#3F7373]/15 bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#3F7373]/10 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5D7D9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                <div className="relative z-10">
                  <div className="text-[50px] font-mono text-[#C5D7D9] mb-6 leading-none">{card.n}</div>
                  <h4 className="text-2xl font-black uppercase mb-3 text-[#1A1A1A]">{card.title}</h4>
                  <div className="text-[8px] font-mono font-black tracking-widest mb-6" style={{ color: card.accent }}>{card.sub}</div>
                  <p className="text-sm text-[#A8BDBF] font-sans leading-relaxed mb-10">{card.desc}</p>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-black text-[#3F7373]">{card.stat}</span>
                    <span className="text-[10px] font-mono text-[#A8BDBF] mb-1.5">{card.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benchmark bars */}
          <div className="border border-[#3F7373]/15 p-12 bg-white rounded-[2rem] shadow-sm">
            <div className="text-[10px] font-mono text-[#3F7373] mb-4 tracking-[0.4em] font-black">PERFORMANCE BENCHMARKS · H100 VS A100</div>
            <h3 className="text-3xl font-black text-[#1A1A1A] mb-12 uppercase tracking-tighter">H100 Generation Performance</h3>
            <div className="space-y-8">
              {[
                { label: "AI Training (FP8)",    h100: 100, a100: 42 },
                { label: "Inference Throughput", h100: 100, a100: 35 },
                { label: "Memory Bandwidth",     h100: 100, a100: 65 },
                { label: "Power Efficiency",     h100: 100, a100: 70 }
              ].map((b, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-[#1A1A1A] font-black">{b.label}</span>
                    <span className="text-[#3F7373] font-black">{b.h100}%</span>
                  </div>
                  <div className="relative h-6 bg-[#F2F1F0] border border-[#3F7373]/10 rounded-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#3F7373] to-[#768C45] rounded-full"
                      style={{ width: `${b.h100}%` }} />
                    <div className="absolute inset-y-0 border-l-2 border-dashed border-[#1A1A1A]/30"
                      style={{ left: `${b.a100}%` }}>
                      <div className="absolute -top-7 left-2 text-[8px] font-mono text-[#A8BDBF] whitespace-nowrap font-black">
                        A100: {b.a100}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DEPLOYMENT INFRASTRUCTURE ─────────────────────────── */}
      <section className="py-32 px-6 bg-white border-t border-[#3F7373]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[10px] font-mono text-[#3F7373] tracking-[0.6em] mb-6 font-black">DEPLOYMENT ARCHITECTURE</div>
            <h2 className="text-6xl md:text-7xl font-black uppercase text-[#1A1A1A] tracking-tighter leading-none">
              Global GPU{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] to-[#768C45]">Fabric</span>
            </h2>
            <p className="text-[#A8BDBF] text-lg mt-6 max-w-2xl mx-auto font-sans italic">
              Deploy across the world's most advanced GPU infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { region: "US-EAST-1",     instance: "P5.48xlarge",    gpus: "8× H100",      network: "3200 Gbps EFA",  status: "Active",       statusColor: "bg-[#3F7373] text-[#F2F1F0]" },
              { region: "EU-WEST-1",     instance: "DGX Cloud",       gpus: "16× H100",     network: "400 Gbps RoCE",  status: "Provisioning", statusColor: "bg-[#768C45] text-[#F2F1F0]" },
              { region: "AP-NORTHEAST-1",instance: "GH200",            gpus: "Grace Hopper", network: "NVLink-C2C",    status: "Deployed",     statusColor: "bg-[#A8BDBF] text-[#1A1A1A]" },
              { region: "US-WEST-2",     instance: "P4d.24xlarge",    gpus: "8× A100",      network: "400 Gbps EFA",  status: "Standby",      statusColor: "bg-[#C5D7D9] text-[#1A1A1A]" }
            ].map((d, idx) => (
              <div key={idx} className="group border border-[#3F7373]/15 p-8 bg-[#F2F1F0] rounded-[1.5rem] hover:border-[#3F7373]/40 hover:shadow-xl hover:shadow-[#3F7373]/10 hover:-translate-y-2 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-sm font-mono text-[#3F7373] font-black">{d.region}</span>
                  <span className={`text-[8px] font-mono px-3 py-1 rounded-full font-black ${d.statusColor}`}>{d.status}</span>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-mono font-black text-[#1A1A1A]">{d.instance}</div>
                  <div className="text-sm text-[#3F7373] font-black">{d.gpus}</div>
                  <div className="text-[10px] font-mono text-[#A8BDBF]">{d.network}</div>
                </div>
                <div className="mt-8 pt-6 border-t border-[#3F7373]/10">
                  <button className="text-[8px] font-mono text-[#3F7373] uppercase tracking-widest hover:text-[#768C45] transition-colors font-black">
                    View Metrics →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared Footer ─────────────────────────────────────── */}
      <InnerPageFooter />

    </div>
  );
}
