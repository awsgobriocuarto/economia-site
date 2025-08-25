import { useEffect, useState } from "react";
import { getDeclarations } from "../services/getDeclarations";


export function useDeclarations() {
  const [loading, setLoading] = useState(false);
  const [declarations, setDeclarations] = useState([]);

  useEffect(() => {
    setLoading(true);
    getDeclarations().then((declarations) => {
      setDeclarations(declarations);
      setLoading(false);
    });
  }, [setDeclarations]);

  return { loading, declarations };
}
