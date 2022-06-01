import { useEffect, useState } from "react";
import { getSlides } from "../services/getSlides";

export function useSlides() {
  const [loading, setLoading] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setLoading(true);
    getSlides().then((slides) => {
      setSlides(slides);
      setLoading(false);
    });
  }, [setSlides]);

  return { loading, slides };
}
