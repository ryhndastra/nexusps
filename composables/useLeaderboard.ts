import { ref, onMounted, onBeforeUnmount } from "vue";
interface LeaderboardEntry {
  username: string;
  score: number;
}

export function useLeaderboard() {
  const leaderboard = ref<LeaderboardEntry[]>([]);
  const error = ref<string | null>(null);
  const loading = ref(true);

  let intervalId: number | null = null;

  const config = useRuntimeConfig();

  const apiUrl = config.public.leaderboardApiUrl;

  const fetchLeaderboard = async (isInitial = false) => {
    try {
      if (isInitial) {
        loading.value = true;
      }

      error.value = null;

      if (!apiUrl || typeof apiUrl !== "string") {
        throw new Error("Leaderboard API URL not configured");
      }

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const rawData = await response.json();

      console.log("RAW Leaderboard Data:", rawData);

      const leaderboardArray = rawData.richLeaderboard;

      if (!Array.isArray(leaderboardArray)) {
        throw new Error("Invalid leaderboard format");
      }

      const parsedLeaderboard: LeaderboardEntry[] = leaderboardArray
        .map((entry: unknown) => {
          if (
            Array.isArray(entry) &&
            typeof entry[0] === "string" &&
            typeof entry[1] === "number"
          ) {
            return {
              username: entry[0],
              score: entry[1],
            };
          }

          return null;
        })
        .filter((entry): entry is LeaderboardEntry => entry !== null);

      leaderboard.value = parsedLeaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      console.log("Parsed Leaderboard:", leaderboard.value);

      leaderboard.value = parsedLeaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    } catch (err) {
      console.error("Failed to fetch leaderboard:", err);

      error.value = err instanceof Error ? err.message : "Unknown error";

      leaderboard.value = [];
    } finally {
      if (isInitial) {
        loading.value = false;
      }
    }
  };

  onMounted(() => {
    fetchLeaderboard(true);

    intervalId = window.setInterval(
      () => {
        fetchLeaderboard(false);
      },
      5 * 60 * 1000,
    );
  });

  onBeforeUnmount(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });

  return {
    leaderboard,
    error,
    loading,
    fetchLeaderboard,
  };
}
