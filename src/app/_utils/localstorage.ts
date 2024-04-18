export function getUserDataForLocalStorage() {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("sb-sdyfujwfykmydszxtqvv-auth-token");
    if (!user) return;
    try {
      return JSON.parse(user).user;
    } catch {
      return null;
    }
  }
}
