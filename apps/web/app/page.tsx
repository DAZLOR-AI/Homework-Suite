import { Header } from "@/components/Header";
import { QuestCard } from "@/components/QuestCard";
import { achievements, assignments, subjects } from "@/lib/mockData";

export default function HomePage() {
  return (
    <main className="hs-shell">
      <section className="hero">
        <Header />
        <div className="hero-card">
          <div>
            <p className="eyebrow">Today&apos;s Quest</p>
            <h2>Conquer 3 homework challenges to unlock Nebula Badge</h2>
            <p>Earn bonus coins for each perfect streak. Keep momentum with short game loops.</p>
          </div>
          <button className="primary-btn">Start Daily Challenge</button>
        </div>
      </section>

      <section className="subject-grid">
        {subjects.map((subject) => (
          <article key={subject.id} className="subject-card" style={{ borderColor: subject.color }}>
            <h3>{subject.label}</h3>
            <p>{subject.xp} XP</p>
            <small>{subject.streak}-day streak</small>
          </article>
        ))}
      </section>

      <section>
        <div className="section-title">
          <h2>Active Assignments</h2>
          <button className="ghost-btn">View All</button>
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
          <p className="eyebrow">Progress</p>
          <h2>Level 12 Explorer</h2>
          <p>88% mastery in current module • 3 goals remaining this week.</p>
        </div>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
