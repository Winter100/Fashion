const localStorageUserKey = "sb-sdyfujwfykmydszxtqvv-auth-token";
export function getUserDataForLocalStorage() {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem(localStorageUserKey);
    if (!user) return;
    try {
      return JSON.parse(user).user;
    } catch {
      return null;
    }
  }
}

export function removeUserDataForLocalSotarge() {
  localStorage.removeItem(localStorageUserKey);
}

export function setFilterValueForLocalStorage(
  key: "tagFilter" | "dateFilter",
  value: string,
) {
  localStorage.setItem(key, value);
}

export function getFilteredValueForLocalStorage(
  key: "tagFilter" | "dateFilter",
) {
  if (key === "tagFilter") return localStorage.getItem(key);
  if (key === "dateFilter") return localStorage.getItem(key);
}

export function removeFilteredValueForLocalStorage() {
  localStorage.removeItem("tagFilter");
  localStorage.removeItem("dateFilter");
}
