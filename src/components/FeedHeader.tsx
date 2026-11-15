export const FeedHeader = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-chirp-line bg-white/90 backdrop-blur-sm">
      <div className="border-b border-chirp-line px-4 py-3">
        <h1 className="text-xl font-bold text-chirp-ink">Home</h1>
      </div>
      <nav
        className="flex text-[15px] text-chirp-muted"
        aria-label="Timeline filters"
      >
        <button
          type="button"
          className="flex-1 border-b-2 border-chirp-blue py-3.5 font-semibold text-chirp-blue"
        >
          Timeline
        </button>
        <button
          type="button"
          disabled
          className="flex-1 py-3.5 font-medium transition hover:bg-chirp-panel disabled:cursor-default disabled:opacity-60"
        >
          Mentions
        </button>
      </nav>
    </header>
  );
};