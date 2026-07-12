"use client"

import { useEffect, useState } from "react"

const timeFormatter = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
})

export default function LiveClock() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const updateTime = () => setNow(new Date())

    updateTime()
    const intervalId = window.setInterval(updateTime, 30_000)

    return () => window.clearInterval(intervalId)
  }, [])

  return <time dateTime={now?.toISOString()}>{now ? timeFormatter.format(now) : "--:--"}</time>
}
