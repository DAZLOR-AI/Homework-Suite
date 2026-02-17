import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const cards = [
  { title: "Fractions Boss Battle", subtitle: "Math • Level 3", time: "18 min" },
  { title: "Timeline Builder", subtitle: "History • Level 2", time: "15 min" },
  { title: "Word Warriors", subtitle: "Vocabulary • Level 4", time: "20 min" }
];

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.brand}>Homework Suite</Text>
        <Text style={styles.tagline}>Level up your brain</Text>

        <View style={styles.heroCard}>
          <Text style={styles.heroEyebrow}>Daily Quest</Text>
          <Text style={styles.heroTitle}>Complete 3 assignments for a streak bonus</Text>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Start Challenge</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Active Missions</Text>
        {cards.map((card) => (
          <View key={card.title} style={styles.missionCard}>
            <Text style={styles.missionTitle}>{card.title}</Text>
            <Text style={styles.missionMeta}>{card.subtitle}</Text>
            <Text style={styles.missionTime}>{card.time}</Text>
          </View>
        ))}

        <View style={styles.progressCard}>
          <Text style={styles.heroEyebrow}>Progress</Text>
          <Text style={styles.heroTitle}>Level 12 • 88% mastery this week</Text>
          <Text style={styles.progressText}>Achievements: 7-day streak • Top 10 class • Algebra Basics Mastered</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#f3efad" },
  container: { padding: 20, gap: 14 },
  brand: { fontSize: 28, fontWeight: "800", color: "#191919" },
  tagline: { color: "#4b5563", marginBottom: 8 },
  heroCard: {
    backgroundColor: "#fffef2",
    borderRadius: 24,
    padding: 16,
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4
  },
  heroEyebrow: { fontSize: 12, textTransform: "uppercase", color: "#6b7280", letterSpacing: 1 },
  heroTitle: { fontSize: 20, fontWeight: "700", color: "#111827" },
  cta: { backgroundColor: "#1d4ed8", borderRadius: 999, paddingVertical: 12, alignItems: "center" },
  ctaText: { color: "white", fontWeight: "700" },
  sectionTitle: { marginTop: 6, fontSize: 20, fontWeight: "700", color: "#111827" },
  missionCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 14,
    gap: 4,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3
  },
  missionTitle: { fontSize: 17, fontWeight: "700", color: "#111827" },
  missionMeta: { color: "#4b5563" },
  missionTime: { color: "#6b7280", fontSize: 12 },
  progressCard: { backgroundColor: "#111827", borderRadius: 20, padding: 16, gap: 8 },
  progressText: { color: "#cbd5e1" }
});
