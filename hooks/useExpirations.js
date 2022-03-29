import { useEffect, useState } from "react";
import { getExpirations } from "../services/getExpirations";

export function useExpirations() {
  const [loading, setLoading] = useState(false);
  const [expirations, setExpirations] = useState([]);

  useEffect(() => {
    setLoading(true);
    getExpirations().then((expirations) => {
      setExpirations(expirations);
      setLoading(false);
    });
  }, [setExpirations]);

  return { loading, expirations };
}
