import { ref, onMounted, onBeforeUnmount } from "vue";

interface ServerStatusResponse {
  status: "online" | "offline";
  players: number;
  timestamp: string;
  up_since: string;
  uptime_seconds: number;
  uptime: string;
}

export function useServerStatus() {
  const status = ref<"online" | "offline">("offline");
  const playerCount = ref(0);
  const error = ref<string | null>(null);
  const loading = ref(true);

  let intervalId: number | null = null;

  const config = useRuntimeConfig();

  const apiUrl = config.public.onlineStatusApiUrl;

  const fetchStatus = async (isInitial = false) => {
    try {
      if (isInitial) {
        loading.value = true;
      }

      error.value = null;

      if (!apiUrl || typeof apiUrl !== "string") {
        throw new Error("API URL not configured");
      }

      console.log("API URL:", apiUrl);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ServerStatusResponse = await response.json();

      console.log("Server Data:", data);

      status.value = data.status;

      playerCount.value = typeof data.players === "number" ? data.players : 0;
    } catch (err) {
      console.error("Failed to fetch server status:", err);

      error.value = err instanceof Error ? err.message : "Unknown error";

      status.value = "offline";
      playerCount.value = 0;
    } finally {
      if (isInitial) {
        loading.value = false;
      }
    }
  };

  onMounted(() => {
    fetchStatus(true);

    intervalId = window.setInterval(() => {
      fetchStatus(false);
    }, 30000);
  });

  onBeforeUnmount(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });

  return {
    status,
    playerCount,
    error,
    loading,
    fetchStatus,
  };
}
