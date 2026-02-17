import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const cards = [
  { emoji: "🧮", title: "Fractions Boss Battle", subtitle: "Math • Level 3", time: "18 min" },
  { emoji: "📜", title: "Timeline Builder", subtitle: "History • Level 2", time: "15 min" },
  { emoji: "🧠", title: "Word Warriors", subtitle: "Vocabulary • Level 4", time: "20 min" }
];

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.brand}>Homework Suite</Text>
          <Text style={styles.spark}>✨</Text>
        </View>
        <Text style={styles.tagline}>Notion calm. Game energy.</Text>

        <View style={styles.heroCard}>
          <Text style={styles.heroEyebrow}>Today&apos;s Plan</Text>
          <Text style={styles.heroTitle}>Complete 3 quests and lock your 7-day streak</Text>
          <Text style={styles.heroBody}>Focus mode + instant rewards = level up faster without burnout.</Text>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Start Focus Session</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickStats}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>XP</Text>
            <Text style={styles.statValue}>3,070</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Streak</Text>
            <Text style={styles.statValue}>7 🔥</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Mastery</Text>
            <Text style={styles.statValue}>88%</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Quest Board</Text>
        {cards.map((card) => (
          <View key={card.title} style={styles.missionCard}>
            <View style={styles.missionHead}>
              <Text style={styles.emoji}>{card.emoji}</Text>
              <Text style={styles.pill}>{card.time}</Text>
            </View>
            <Text style={styles.missionTitle}>{card.title}</Text>
            <Text style={styles.missionMeta}>{card.subtitle}</Text>
          </View>
        ))}

        <View style={styles.progressCard}>
          <Text style={styles.progressEyebrow}>Weekly Snapshot</Text>
          <Text style={styles.progressTitle}>Level 12 Explorer</Text>
          <Text style={styles.progressText}>Achievements: Top 10 class • Algebra Basics Mastered • Daily consistency MVP</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#f6f5f2" },
  container: { padding: 18, gap: 12 },
  topBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  brand: { fontSize: 30, fontWeight: "800", color: "#2f3437" },
  spark: { fontSize: 24 },
  tagline: { color: "#787774", marginBottom: 6 },
  heroCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e9e7e2",
    padding: 16,
    gap: 8
  },
  heroEyebrow: { fontSize: 11, textTransform: "uppercase", color: "#787774", letterSpacing: 1.2 },
  heroTitle: { fontSize: 24, fontWeight: "700", color: "#2f3437" },
  heroBody: { color: "#5f5e5b" },
  cta: {
    marginTop: 6,
    backgroundColor: "#6d5dfc",
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center"
  },
  ctaText: { color: "white", fontWeight: "700" },
  quickStats: { flexDirection: "row", gap: 8 },
  statCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e9e7e2",
    padding: 10,
    gap: 2
  },
  statLabel: { color: "#787774", fontSize: 12 },
  statValue: { color: "#2f3437", fontSize: 20, fontWeight: "700" },
  sectionTitle: { marginTop: 6, fontSize: 21, fontWeight: "700", color: "#2f3437" },
  missionCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e9e7e2",
    padding: 14,
    gap: 5
  },
  missionHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  emoji: { fontSize: 24 },
  pill: { backgroundColor: "#efedff", color: "#5145c7", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  missionTitle: { fontSize: 17, fontWeight: "700", color: "#2f3437" },
  missionMeta: { color: "#5f5e5b" },
  progressCard: {
    backgroundColor: "#2f3437",
    borderRadius: 18,
    padding: 14,
    gap: 7
  },
  progressEyebrow: { textTransform: "uppercase", fontSize: 11, color: "#a6a39b", letterSpacing: 1.1 },
  progressTitle: { fontSize: 24, fontWeight: "700", color: "#f8fafc" },
  progressText: { color: "#d5d5d1" }
});
