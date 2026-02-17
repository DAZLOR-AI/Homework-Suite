export function Header() {
  return (
    <header className="topbar">
      <div className="search-wrap">
        <span aria-hidden>🔎</span>
        <input aria-label="Search assignments" placeholder="Search quests, notes, classes..." />
      </div>
      <button className="ghost-btn" aria-label="Open notifications">
        🔔
      </button>
      <button className="profile-pill" aria-label="Open profile menu">
        <span>✨</span> Alex
      </button>
    </header>
  );
}
