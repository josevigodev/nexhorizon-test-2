export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className='inline-flex text-primary-fixed items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold tracking-widest uppercase'
      style={{
        background: 'rgba(201,145,10,0.12)',
        border: `1px solid rgba(201,145,10,0.25)`
      }}
    >
      {children}
    </span>
  )
}
