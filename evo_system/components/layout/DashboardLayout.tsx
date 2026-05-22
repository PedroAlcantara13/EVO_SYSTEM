interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({
  children
}: Props) {
  return (
    <main
      className="
        min-h-screen
        bg-[#050816]
        text-white
        p-4 md:p-6
      "
    >
      <div
        className="
          max-w-[1800px]
          mx-auto
          space-y-6
        "
      >
        {children}
      </div>
    </main>
  )
}