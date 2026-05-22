interface Props {
  title: string
  value: string
}

export default function SystemCard({ title, value }: Props) {
  return (
    <div className="
      border border-red-500/20
      bg-white/5
      backdrop-blur-xl
      rounded-2xl
      p-6
      neon-red
    ">
      <h2 className="text-zinc-400 text-sm">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-2 text-red-500">
        {value}
      </p>
    </div>
  )
}