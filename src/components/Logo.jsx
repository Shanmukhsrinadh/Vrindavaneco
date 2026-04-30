export default function Logo({ className = "" }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-600 text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 2C7 6 4 9.5 4 14a8 8 0 0 0 16 0c0-4.5-3-8-8-12Zm0 18a6 6 0 0 1-6-6c0-3 1.8-5.7 6-9 4.2 3.3 6 6 6 9a6 6 0 0 1-6 6Zm-1-3a4 4 0 0 1-3-3c0-1.5.9-2.9 3-4.6V17Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-base font-bold tracking-tight text-bark-900 sm:text-lg">
          Vrindavan
        </span>
        <span className="-mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-leaf-700">
          Eco Plates
        </span>
      </span>
    </span>
  );
}
