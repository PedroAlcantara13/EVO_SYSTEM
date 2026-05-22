import {
  Menu,
  Wifi,
  Bluetooth
} from "lucide-react"

export default function TopNavbar() {
  return (
    <header
      className="
        cyber-card
        px-6
        py-4
        flex
        items-center
        justify-between
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">

        <button
          className="
            p-3
            rounded-xl
            bg-white/5
            hover:bg-white/10
            transition
          "
        >
          <Menu />
        </button>

        <div>
          <h1
            className="
              text-4xl
              font-black
              tracking-wider
            "
          >
            <span className="neon-text">
              EVO
            </span>

            {" "}SYSTEM
          </h1>

          <p className="text-zinc-500 text-sm">
            CYBERPUNK INTERFACE
          </p>
        </div>

      </div>

      {/* CENTER */}
      <div
        className="
          text-3xl
          font-bold
        "
      >
        22:48
      </div>

      {/* RIGHT */}
      <div
        className="
          flex
          items-center
          gap-6
        "
      >
        <Wifi className="text-white" />

        <Bluetooth className="text-white" />

        <div
          className="
            px-4
            py-2
            rounded-xl
            border
            border-red-500/30
            neon-text
          "
        >
          12.4V
        </div>
      </div>
    </header>
  )
}