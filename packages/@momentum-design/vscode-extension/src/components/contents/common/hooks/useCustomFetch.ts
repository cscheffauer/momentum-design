import { useState, useEffect } from "react";

export const useFetch = (url: string, type: "json" | "text") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let data = null;
        if (type === "json") {
          data = await response.json();
        }
        if (type === "text") {
          data = await response.text();
        }
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
