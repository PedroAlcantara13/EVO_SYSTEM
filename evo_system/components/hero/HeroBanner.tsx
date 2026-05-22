import Image from "next/image"

export default function HeroBanner() {
  return (
    <section
      className="
        cyber-card
        overflow-hidden
        grid
        grid-cols-1
        lg:grid-cols-4
        h-[380px]
        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-[#ff004c]/5
        before:to-transparent
        before:pointer-events-none
      "
    >

      {/* LEFT PANEL */}
      <div
        className="
          p-8
          flex
          flex-col
          justify-center
          gap-6
          relative
          z-10
        "
      >
        <div>
          <p className="text-zinc-400 mb-2 tracking-wide">
            MODO ATUAL
          </p>

          <h2
            className="
              text-7xl
              font-black
              text-[#ff004c]
              tracking-tight
            "
            style={{
              textShadow:
                "0 0 8px rgba(255,0,80,0.45)"
            }}
          >
            SPORT
          </h2>

          <p className="text-zinc-500 mt-2">
            スポーツモード
          </p>
        </div>

        <button
          className="
            w-fit
            px-8
            py-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            hover:border-red-500/40
            hover:bg-white/10
            transition-all
            duration-300
            text-lg
            font-medium
          "
        >
          ALTERAR MODO
        </button>
      </div>

      {/* IMAGE */}
      <div
        className="
          lg:col-span-2
          relative
          overflow-hidden
        "
      >
        <Image
          src="/images/evo-banner.png"
          alt="EVO Cyberpunk Banner"
          fill
          priority
          className="
            object-cover
            scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-black/10
          "
        />

        {/* CINEMATIC OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/70
            via-transparent
            to-black/70
          "
        />

        {/* TOP GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#ff004c]/10
            to-transparent
          "
        />
      </div>

      {/* STATUS PANEL */}
      <div
        className="
          p-8
          flex
          flex-col
          justify-center
          gap-8
          relative
          z-10
        "
      >

        <div>
          <p className="text-zinc-500 text-sm tracking-wide">
            STATUS
          </p>

          <h3
            className="
              text-green-400
              text-5xl
              font-black
            "
          >
            ONLINE
          </h3>
        </div>

        <div>
          <p className="text-zinc-500 text-sm tracking-wide">
            DISPOSITIVO
          </p>

          <h3
            className="
              text-[#ff004c]
              text-4xl
              font-black
            "
            style={{
              textShadow:
                "0 0 8px rgba(255,0,80,0.35)"
            }}
          >
            ESP32-EVO
          </h3>
        </div>

        <div>
          <p className="text-zinc-500 text-sm tracking-wide">
            CONEXÃO
          </p>

          <h3
            className="
              text-green-400
              text-4xl
              font-black
            "
          >
            100%
          </h3>
        </div>

      </div>

    </section>
  )
}