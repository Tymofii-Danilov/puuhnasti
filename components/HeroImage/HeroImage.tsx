"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import css from "./HeroImage.module.css";

export default function HeroImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <Image
        src="/logo.webp"
        alt="rug"
        className={css.heroImage}
        fill
        style={{
          transform: `
    rotateY(${position.x}deg)
    rotateX(${-position.y}deg)
  `,
        }}
      />
    </div>
  );
}
