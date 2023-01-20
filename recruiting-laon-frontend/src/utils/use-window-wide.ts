import { useEffect, useState } from "react";

export function useWindowWide() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setWidth("xs");
        return;
      }

      if (window.innerWidth < 992) {
        setWidth("sm");
        return;
      }

      if (window.innerWidth < 1200) {
        setWidth("md");
        return;
      }

      setWidth("lg");
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);


  console.log(width);
  return width;
}
