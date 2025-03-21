'use client'

import { useEffect } from "react"

const ScrollbarIndicator = () => {
    useEffect(() => {
        const handleScroll = () => {
          const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          const progressBar = document.getElementById("myBar");
          if (progressBar) {
            progressBar.style.width = `${scrolled}%`;
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div id="myBar" style={{background: "linear-gradient(270deg, #00A4E4 0%, #00B6B5 79%)"}} className="fixed top-0 left-0 w-0 h-[4px] lg:h-[0.41666666666vw]  z-[5555]">
      
    </div>
  )
}

export default ScrollbarIndicator
