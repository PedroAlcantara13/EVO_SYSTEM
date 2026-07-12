"use client"

import { useState } from "react"

const drivingModes = [
  { name: "SPORT", subtitle: "スポーツモード" },
  { name: "NORMAL", subtitle: "ノーマルモード" },
  { name: "ECO", subtitle: "エコモード" },
]

export default function ModeSelector() {
  const [modeIndex, setModeIndex] = useState(0)
  const mode = drivingModes[modeIndex]

  function selectNextMode() {
    setModeIndex((currentIndex) => (currentIndex + 1) % drivingModes.length)
  }

  return (
    <div id="modo" className="scroll-mt-6">
      <p className="mb-2 tracking-wide text-zinc-400">MODO SELECIONADO</p>

      <h2
        id="painel-title"
        className="text-5xl font-black tracking-tight text-[#ff004c] sm:text-6xl xl:text-7xl"
        style={{ textShadow: "0 0 8px rgba(255,0,80,0.45)" }}
      >
        {mode.name}
      </h2>

      <p className="mt-2 text-zinc-500">{mode.subtitle}</p>

      <button
        type="button"
        onClick={selectNextMode}
        className="mt-6 w-fit rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium transition-all duration-300 hover:border-red-500/40 hover:bg-white/10"
      >
        ALTERAR MODO
      </button>

      <p className="sr-only" aria-live="polite">
        Modo selecionado: {mode.name}
      </p>
    </div>
  )
}
