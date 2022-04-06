import { useEffect, useState } from "react";
import { getLegislations } from "../services/getLegislations";

export function useLegislations() {
  const [loading, setLoading] = useState(false);
  const [legislations, setLegislations] = useState([]);

  useEffect(() => {
    setLoading(true);
    getLegislations().then((legislations) => {
      setLegislations(legislations);
      setLoading(false);
    });
  }, [setLegislations]);

  return { loading, legislations };
}
