export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-medium tracking-[0.32em] uppercase ${
        light ? 'text-[#e8d5b0]' : 'text-[#c9a96a]'
      }`}
    >
      <span className="inline-block h-px w-8 bg-current" />
      {children}
    </p>
  )
}
