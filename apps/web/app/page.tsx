import { Header } from "@/components/Header";
import { QuestCard } from "@/components/QuestCard";
import { achievements, assignments, subjects } from "@/lib/mockData";

const sidebarItems = ["Home", "Play", "Progress", "Assignments", "Badges", "Settings"];

export default function HomePage() {
  return (
    <main className="notion-shell">
      <aside className="sidebar">
        <h1>Homework Suite</h1>
        <p className="eyebrow">Learning OS</p>
        <nav>
          {sidebarItems.map((item) => (
            <button key={item} className={`nav-item ${item === "Home" ? "active" : ""}`}>
              {item}
            </button>
          ))}
        </nav>
        <div className="sidebar-card">
          <p className="eyebrow">Streak</p>
          <h3>7 days 🔥</h3>
          <p>You are in flow mode. One more day unlocks cosmic confetti.</p>
        </div>
      </aside>

      <section className="content">
        <Header />

        <section className="hero-card">
          <div>
            <p className="eyebrow">Today&apos;s Plan</p>
            <h2>Finish 3 quests, earn 600 XP, keep your mastery streak alive.</h2>
            <p>Notion-like calm layout, game-like dopamine loop. Focus, play, level up.</p>
          </div>
          <button className="primary-btn">Start Focus Session</button>
        </section>

        <section className="subject-grid">
          {subjects.map((subject) => (
            <article key={subject.id} className="subject-card" style={{ borderLeftColor: subject.color }}>
              <h3>{subject.label}</h3>
              <p>{subject.xp} XP</p>
              <small>{subject.streak}-day streak</small>
            </article>
          ))}
        </section>

        <section>
          <div className="section-title">
            <h2>Quest Board</h2>
            <button className="ghost-btn">New Assignment</button>
          </div>
          <div className="quest-grid">
            {assignments.map((assignment) => (
              <QuestCard
                key={assignment.id}
                title={assignment.title}
                subject={assignment.subject}
                difficulty={assignment.difficulty}
                reward={assignment.reward}
                minutes={assignment.minutes}
              />
            ))}
          </div>
        </section>

        <section className="stats-panel">
          <div>
            <p className="eyebrow">Weekly Snapshot</p>
            <h2>Level 12 Explorer</h2>
            <p>88% mastery • 3 goals left • +14% faster completion than last week.</p>
          </div>
          <ul>
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
