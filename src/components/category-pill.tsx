interface CategoryPillProps {
    label: string
  }
  
  export function CategoryPill({ label }: CategoryPillProps) {
    return (
      <div className="rounded-full border border-white/50 bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm">{label}</div>
    )
  }
  
  