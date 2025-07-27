"use client";

import { P5jsCanvas } from "@/app/nature-of-code/components/P5jsCanvas";

class TraditionalRandomWalkClass {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    const choice = Math.floor(Math.random() * 4);
    switch (choice) {
      case 0:
        this.x++;
        break;
      case 1:
        this.x--;
        break;
      case 2:
        this.y++;
        break;
      case 3:
        this.y--;
        break;
    }
  }

  show() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, 1, 1);
  }
}

export const TraditionalRandomWalk = () => {
  const setup = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return new TraditionalRandomWalkClass(ctx, canvas.width, canvas.height);
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    state?: unknown,
  ) => {
    const walker = state as TraditionalRandomWalkClass;
    walker.step();
    walker.show();
  };

  return (
    <P5jsCanvas setup={setup} draw={draw} title="Traditional Random Walk" />
  );
};
