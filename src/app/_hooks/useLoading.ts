import { useState } from "react";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);

  function setLoading(loading: boolean) {
    setIsLoading(loading);
  }
  return { isLoading, setLoading };
}
