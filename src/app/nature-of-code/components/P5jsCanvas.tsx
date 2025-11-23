"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/Button";

export interface P5jsCanvasProps {
  width?: number;
  height?: number;
  title?: string;
  style?: React.CSSProperties;
  setup?: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => unknown;
  draw?: (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    state?: unknown,
  ) => void;
  className?: string;
}

export const P5jsCanvas = ({
  width = 500,
  height = 240,
  title,
  style = { border: "1px solid white" },
  setup,
  draw,
  className,
}: P5jsCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<unknown>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    if (setup) {
      stateRef.current = setup(ctx, canvas);
    }

    if (draw) {
      const animate = () => {
        draw(ctx, canvas, stateRef.current);
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, [width, height, setup, draw]);

  const handleReset = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (setup) {
      stateRef.current = setup(ctx, canvas);
    }

    if (draw) {
      draw(ctx, canvas, stateRef.current);
    }
  };

  return (
    <div className={className}>
      {title && <h3>{title}</h3>}
      <div className="relative h-full w-full">
        <canvas ref={canvasRef} style={style} />
        <Button onClick={handleReset} className="absolute bottom-1 left-1">
          Reset
        </Button>
      </div>
    </div>
  );
};
