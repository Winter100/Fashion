import { useState } from "react";

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  async function handleFetch<T>(url: string, method: string, body?: T) {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      return data;
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, handleFetch };
}
