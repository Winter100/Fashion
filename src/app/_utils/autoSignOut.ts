import signOut from "../_api/auth/signOut";
import { getExpiresAt, removeUserDataForLocalSotarge } from "./localstorage";

export function autoSignOut() {
  const expiresAt = getExpiresAt();
  const currentTime = Math.floor(Date.now() / 1000);

  if (currentTime >= Number(expiresAt)) {
    removeUserDataForLocalSotarge();
    signOut();
  }

  return;
}
