import Lenis from "lenis";
import { useEffect } from "react";
import 'lenis/dist/lenis.css'

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup function to prevent memory leaks
    };
  }, []);
};

export default useLenisScroll;
