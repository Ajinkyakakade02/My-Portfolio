import { useEffect, useRef } from "react";

const CursorCat = () => {
  const catRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    let animationFrame: number;

    const animate = () => {
      const dx =
        mouse.current.x - position.current.x;

      const dy =
        mouse.current.y - position.current.y;

      position.current.x += dx * 0.08;
      position.current.y += dy * 0.08;

      if (catRef.current) {
        catRef.current.style.transform = `
          translate3d(
            ${position.current.x}px,
            ${position.current.y}px,
            0
          )
        `;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <div
      ref={catRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        select-none
      "
      style={{
        transform: "translate3d(100px, 100px, 0)",
      }}
    >
      🐈
    </div>
  );
};

export default CursorCat;