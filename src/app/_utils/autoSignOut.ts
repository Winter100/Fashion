import signOut from "../_api/auth/signOut";
import { getExpiresAt } from "./localstorage";

export function autoSignOut() {
  const expiresAt = getExpiresAt();
  const currentTime = Math.floor(Date.now() / 1000);

  if (expiresAt && currentTime >= parseInt(expiresAt)) {
    signOut();
  }
}
