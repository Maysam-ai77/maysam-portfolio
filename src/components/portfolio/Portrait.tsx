import portrait from "@/assets/maysam-portrait.jpg";

export function Portrait({ alt }: { alt: string }) {
  return (
    <div className="relative mx-auto aspect-square w-[min(78vw,22rem)] sm:w-[24rem] lg:w-full lg:max-w-120">
      <div
        className="glow-soft pointer-events-none absolute inset-[-22%] rounded-full"
        aria-hidden
      />
      <div
        className="animate-spin-slow pointer-events-none absolute -inset-5 rounded-full border border-dashed border-pink/35 sm:-inset-7"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-10 hidden rounded-full border border-line sm:block sm:-inset-14"
        aria-hidden
      />
      <div className="animate-portrait portrait-ring relative h-full w-full overflow-hidden rounded-full border-[3px] border-pink bg-foreground">
        <img
          src={portrait}
          alt={alt}
          width={1000}
          height={1000}
          fetchPriority="high"
          className="h-full w-full scale-[1.34] object-cover object-[50%_45%]"
        />
      </div>
    </div>
  );
}
