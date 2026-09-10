import { useEffect, useRef } from "react";

const CursorCat = () => {
  const catRef = useRef<HTMLImageElement>(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const position = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animate = () => {
      const cat = catRef.current;

      if (cat) {
        const targetX = mouse.current.x;
        const targetY = mouse.current.y;

        const dx = targetX - position.current.x;
        const dy = targetY - position.current.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        // Stop when the cat is close enough to the cursor
        const stopDistance = 18;

        if (distance > stopDistance) {
          const speed = Math.min(0.08, distance / 1000);

          position.current.x += dx * speed;
          position.current.y += dy * speed;
        }

        // Center the GIF on its current position
        cat.style.transform = `translate3d(
          ${position.current.x - 32}px,
          ${position.current.y - 32}px,
          0
        )`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <img
      ref={catRef}
      src="/cat.gif"
      alt=""
      draggable={false}
      className="cursor-cat"
    />
  );
};

export default CursorCat;
