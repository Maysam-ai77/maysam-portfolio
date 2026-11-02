interface Props {
  index: string;
  title: string;
  id?: string;
}

export function SectionHeader({ index, title, id }: Props) {
  return (
    <div className="mb-12 flex items-end gap-5 md:mb-16">
      <span className="font-display text-sm font-semibold tabular-nums text-brand" aria-hidden>
        ({index})
      </span>
      <h2
        id={id}
        className="font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      <span className="mb-3 hidden h-px flex-1 bg-line sm:block" aria-hidden />
    </div>
  );
}
