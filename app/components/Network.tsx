"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Network() {
  const init = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: ["#3FA9DC", "#4FAF9A"] },
          links: {
            enable: true,
            color: "#3FA9DC",
            opacity: 0.3,
            distance: 120,
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          size: { value: 2 },
          opacity: { value: 0.6 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
