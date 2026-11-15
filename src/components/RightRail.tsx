const trends = [
  { category: "Technology · Trending", title: "tRPC", posts: "12.4K" },
  { category: "Design · Trending", title: "#UIpolish", posts: "8,201" },
  { category: "Trending nearby", title: "SQLite", posts: "3,891" },
];

const suggestions = [
  { name: "Alice Codes", handle: "@alice_codes" },
  { name: "Bob Builds", handle: "@bob_builds" },
  { name: "Cara Designs", handle: "@cara_designs" },
];

export const RightRail = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-[320px] shrink-0 px-4 py-3 lg:block">
      <SearchBox />
      <section className="chirp-card mt-4 overflow-hidden">
        <h2 className="border-b border-chirp-line px-4 py-3 text-[19px] font-bold text-chirp-ink">
          Trends for you
        </h2>
        <ul>
          {trends.map((trend) => (
            <li
              key={trend.title}
              className="cursor-default border-b border-chirp-line/80 px-4 py-3 transition hover:bg-chirp-sky/40"
            >
              <p className="text-xs text-chirp-muted">{trend.category}</p>
              <p className="font-bold text-chirp-ink">{trend.title}</p>
              <p className="text-xs text-chirp-muted">{trend.posts} posts</p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="w-full px-4 py-3 text-left text-[15px] text-chirp-blue hover:bg-chirp-sky/40"
        >
          Show more
        </button>
      </section>
      <section className="chirp-card mt-4 overflow-hidden">
        <h2 className="border-b border-chirp-line px-4 py-3 text-[19px] font-bold text-chirp-ink">
          Suggested follows
        </h2>
        <ul>
          {suggestions.map((person) => (
            <li
              key={person.handle}
              className="flex items-center justify-between border-b border-chirp-line/80 px-4 py-3 hover:bg-chirp-sky/40"
            >
              <div>
                <p className="font-bold text-chirp-ink">{person.name}</p>
                <p className="text-sm text-chirp-muted">{person.handle}</p>
              </div>
              <button
                type="button"
                className="rounded-full border border-chirp-line bg-white px-3 py-1 text-sm font-semibold text-chirp-blue shadow-sm hover:bg-chirp-sky/50"
              >
                Follow
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="w-full px-4 py-3 text-left text-[15px] text-chirp-blue hover:bg-chirp-sky/40"
        >
          Show more
        </button>
      </section>
      <p className="mt-6 px-2 text-xs leading-relaxed text-chirp-muted">
        Chirp — a fan timeline demo. Not affiliated with any social network.
      </p>
    </aside>
  );
};

const SearchBox = () => (
  <div className="sticky top-0 z-10 bg-chirp-page py-2">
    <input
      type="search"
      placeholder="Search Chirp"
      className="w-full rounded-full border border-chirp-line bg-chirp-panel px-4 py-2 text-[15px] text-chirp-ink outline-none ring-chirp-blue/30 placeholder:text-chirp-muted focus:border-chirp-blue focus:ring-2"
      disabled
      aria-label="Search"
    />
  </div>
);