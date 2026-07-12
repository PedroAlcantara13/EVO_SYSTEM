import {
  Wifi,
  Bluetooth
} from "lucide-react"
import DashboardMenu from "@/components/navbar/DashboardMenu"
import LiveClock from "@/components/navbar/LiveClock"

export default function TopNavbar() {
  return (
    <header
      className="
        cyber-card
        cyber-card--menu
        px-4
        py-3
        sm:px-6
        sm:py-4
        flex
        items-center
        justify-between
        gap-3
      "
    >
      {/* LEFT */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <DashboardMenu />

        <div className="min-w-0">
          <h1
            className="
              whitespace-nowrap
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-black
              tracking-wide
            "
          >
            <span className="neon-text">
              EVO
            </span>

            {" "}SYSTEM
          </h1>

          <p className="hidden text-sm text-zinc-500 sm:block">
            CYBERPUNK INTERFACE
          </p>
        </div>

      </div>

      {/* CENTER */}
      <div
        className="
          hidden
          md:block
          text-xl
          lg:text-3xl
          font-bold
          tabular-nums
        "
      >
        <LiveClock />
      </div>

      {/* RIGHT */}
      <div
        className="
          flex
          items-center
          shrink-0
          gap-2
          sm:gap-4
          lg:gap-6
        "
      >
        <Wifi aria-hidden="true" className="size-4 text-white sm:size-5" />

        <Bluetooth aria-hidden="true" className="hidden size-4 text-white sm:block sm:size-5" />

        <div
          className="
            px-2
            py-1
            sm:px-4
            sm:py-2
            rounded-xl
            border
            border-red-500/30
            neon-text
            text-sm
            sm:text-base
          "
          aria-label="Tensão da bateria: 12,4 volts"
        >
          12.4V
        </div>
      </div>
    </header>
  )
}
