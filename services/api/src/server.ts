import cors from "cors";
import express from "express";
import { z } from "zod";

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

const users = new Map<string, { id: string; email: string; username: string; gradeLevel: string }>();
const progress = new Map<string, { points: number; streak: number; mastery: number }>();

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "homework-suite-api" });
});

app.post("/api/auth/register", (req, res) => {
  const schema = z.object({
    email: z.string().email(),
    username: z.string().min(2),
    password: z.string().min(8),
    gradeLevel: z.string()
  });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const id = `u_${Date.now()}`;
  users.set(id, { id, email: parsed.data.email, username: parsed.data.username, gradeLevel: parsed.data.gradeLevel });
  progress.set(id, { points: 0, streak: 0, mastery: 0 });

  return res.status(201).json({ id, email: parsed.data.email, username: parsed.data.username });
});

app.post("/api/auth/login", (req, res) => {
  const schema = z.object({ email: z.string().email(), password: z.string().min(8) });
  const parsed = schema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const user = [...users.values()].find((entry) => entry.email === parsed.data.email);
  if (!user) {
    return res.status(404).json({ error: "User not found. Register first." });
  }

  return res.json({ token: `demo-token-${user.id}`, user });
});

app.post("/api/homework/upload", (_req, res) => {
  res.status(202).json({ message: "Upload accepted", uploadId: `hw_${Date.now()}` });
});

app.post("/api/homework/parse", (req, res) => {
  const schema = z.object({ inputText: z.string().min(5) });
  const parsed = schema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const normalized = parsed.data.inputText.toLowerCase();
  const subject = normalized.includes("equation") || normalized.includes("fraction") ? "Math" : "General";

  return res.json({
    subject,
    difficulty: "Level 2",
    questions: [{ id: "q1", prompt: "Sample generated question based on parsed assignment." }]
  });
});

app.get("/api/games/:homeworkId", (req, res) => {
  res.json({
    homeworkId: req.params.homeworkId,
    gameType: "Quiz Dungeon",
    challenges: [
      { id: "c1", question: "What is 3/4 + 1/4?", options: ["1", "1/2", "3/8"], answer: "1" }
    ]
  });
});

app.post("/api/games/:gameId/answer", (req, res) => {
  const schema = z.object({ userId: z.string(), answer: z.string(), isCorrect: z.boolean() });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const stats = progress.get(parsed.data.userId) ?? { points: 0, streak: 0, mastery: 0 };
  if (parsed.data.isCorrect) {
    stats.points += 50;
    stats.streak += 1;
    stats.mastery = Math.min(stats.mastery + 5, 100);
  } else {
    stats.streak = 0;
  }
  progress.set(parsed.data.userId, stats);

  return res.json({ gameId: req.params.gameId, reward: parsed.data.isCorrect ? "+50 XP" : "Try again", stats });
});

app.get("/api/progress/user/:userId", (req, res) => {
  const stats = progress.get(req.params.userId);
  if (!stats) {
    return res.status(404).json({ error: "User progress not found" });
  }
  return res.json(stats);
});

app.get("/api/leaderboard/:scope", (req, res) => {
  const ranking = [...progress.entries()]
    .map(([userId, stats]) => ({ userId, points: stats.points }))
    .sort((a, b) => b.points - a.points)
    .slice(0, 10);

  return res.json({ scope: req.params.scope, ranking });
});

app.listen(port, () => {
  console.log(`Homework Suite API listening on http://localhost:${port}`);
});
