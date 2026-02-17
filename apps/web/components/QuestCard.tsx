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
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
    >
      <p className="quest-subject">{subject}</p>
      <h3>{title}</h3>
      <div className="quest-meta">
        <span>{difficulty}</span>
        <span>{minutes} min</span>
      </div>
      <button className="primary-btn">Play for {reward}</button>
    </motion.article>
  );
}
