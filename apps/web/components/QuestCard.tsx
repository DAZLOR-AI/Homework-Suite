"use client";

import { motion } from "framer-motion";

type QuestCardProps = {
  title: string;
  subject: string;
  difficulty: string;
  reward: string;
  minutes: number;
};

export function QuestCard({ title, subject, difficulty, reward, minutes }: QuestCardProps) {
  return (
    <motion.article
      className="quest-card"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="quest-head">
        <span className="quest-subject">{subject}</span>
        <span className="badge">{difficulty}</span>
      </div>
      <h3>{title}</h3>
      <p className="quest-note">Turn this assignment into a short interactive run with instant feedback.</p>
      <div className="quest-meta">
        <span>⏱️ {minutes} min</span>
        <span>⭐ {reward}</span>
      </div>
      <button className="primary-btn">Play Quest</button>
    </motion.article>
  );
}
