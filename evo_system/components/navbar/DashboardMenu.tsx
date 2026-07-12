"use client"

import { useId, useState } from "react"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { href: "#painel", label: "Visão geral" },
  { href: "#modo", label: "Modo de condução" },
  { href: "#status", label: "Status do sistema" },
]

export default function DashboardMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-controls={isOpen ? menuId : undefined}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="rounded-xl bg-white/5 p-2.5 transition hover:bg-white/10 sm:p-3"
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isOpen && (
        <nav
          id={menuId}
          aria-label="Navegação do painel"
          className="absolute left-4 right-4 top-[calc(100%+0.75rem)] z-30 grid gap-1 rounded-2xl border border-white/10 bg-[#0b1023]/95 p-2 shadow-2xl backdrop-blur-xl sm:left-6 sm:right-auto sm:w-64"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </>
  )
}
