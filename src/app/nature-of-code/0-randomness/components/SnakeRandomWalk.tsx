"use client";

import { P5jsCanvas } from "@/app/nature-of-code/components/P5jsCanvas";

class SnakeRandomWalkClass {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  trail: { x: number; y: number }[] = [];
  maxLength: number = 10;
  canvasWidth: number;
  canvasHeight: number;
  headSize: number = 10;
  bodySize: number = 10;
  stepSize: number = 15;
  frameCount: number = 0;
  moveInterval: number = 10; // 10프레임마다 한 번씩 움직이기

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.x = width / 2;
    this.y = height / 2;
    this.canvasWidth = width;
    this.canvasHeight = height;
    // 초기 위치를 trail에 추가
    this.trail.push({ x: this.x, y: this.y });
  }

  isCollision(x: number, y: number): boolean {
    // 뱀의 몸체와 충돌하는지 확인 (머리는 제외)
    for (let i = 1; i < this.trail.length; i++) {
      const segment = this.trail[i];
      const distance = Math.sqrt((x - segment.x) ** 2 + (y - segment.y) ** 2);

      // 충돌 거리를 더 작게 설정 (몸체 크기의 절반 정도)
      if (distance < this.bodySize * 0.8) {
        return true;
      }
    }
    return false;
  }

  step() {
    this.frameCount++;

    // moveInterval 프레임마다만 움직이기
    if (this.frameCount % this.moveInterval !== 0) {
      return;
    }

    // 정확히 4번만 시도
    for (let attempt = 0; attempt < 4; attempt++) {
      const choice = Math.floor(Math.random() * 4);
      let newX = this.x;
      let newY = this.y;

      switch (choice) {
        case 0:
          newX += this.stepSize;
          break;
        case 1:
          newX -= this.stepSize;
          break;
        case 2:
          newY += this.stepSize;
          break;
        case 3:
          newY -= this.stepSize;
          break;
      }

      // 경계 체크
      const withinBounds =
        newX >= this.headSize &&
        newX < this.canvasWidth - this.headSize &&
        newY >= this.headSize &&
        newY < this.canvasHeight - this.headSize;

      // 4번째 시도(attempt === 3)에서는 충돌 체크를 건너뛰고 강제로 움직이기
      const noCollision = attempt === 3 || !this.isCollision(newX, newY);

      if (withinBounds && noCollision) {
        this.x = newX;
        this.y = newY;

        // 새로운 위치를 trail 맨 앞에 추가
        this.trail.unshift({ x: this.x, y: this.y });

        // 최대 길이를 초과하면 맨 뒤 제거
        if (this.trail.length > this.maxLength) {
          this.trail.pop();
        }

        break; // 성공적으로 움직였으면 루프 종료
      }
    }
  }

  show() {
    // 뱀의 몸체 그리기 (trail의 중간 부분) - 둥근 모서리 네모로 변경
    for (let i = 1; i < this.trail.length - 1; i++) {
      const segment = this.trail[i];
      this.ctx.fillStyle = "#4CAF50"; // 밝은 초록색

      // 둥근 모서리 네모 그리기
      const rectSize = this.bodySize * 2;
      const radius = this.bodySize * 0.5; // 모서리 반지름

      this.ctx.beginPath();
      this.ctx.roundRect(
        segment.x - rectSize / 2,
        segment.y - rectSize / 2,
        rectSize,
        rectSize,
        radius,
      );
      this.ctx.fill();
    }

    // 뱀의 꼬리 그리기 (trail의 마지막 부분) - 세모로 변경
    if (this.trail.length > 1) {
      const tail = this.trail[this.trail.length - 1];
      const beforeTail = this.trail[this.trail.length - 2];

      // 꼬리 방향 계산 (꼬리에서 그 이전 부분으로 향하는 방향의 반대)
      const dx = beforeTail.x - tail.x;
      const dy = beforeTail.y - tail.y;
      const angle = Math.atan2(dy, dx) + Math.PI; // 반대 방향으로

      // 세모 꼬리 그리기
      this.ctx.fillStyle = "#4CAF50"; // 몸통과 동일한 색상
      this.ctx.beginPath();

      const rectSize = this.bodySize * 2; // 몸통과 동일한 크기
      const tailLength = rectSize * 0.8; // 꼬리 길이

      // 꼬리 시작점을 다시 중심으로 되돌리기
      const startX = tail.x;
      const startY = tail.y;

      // 꼬리 끝점 (뾰족한 부분)
      const tipX = startX + Math.cos(angle) * tailLength;
      const tipY = startY + Math.sin(angle) * tailLength;

      // 세모의 좌우 꼭지점 계산 (몸통 너비와 정확히 일치)
      const leftAngle = angle + Math.PI * 0.5;
      const rightAngle = angle - Math.PI * 0.5;

      const leftX = startX + (Math.cos(leftAngle) * rectSize) / 2;
      const leftY = startY + (Math.sin(leftAngle) * rectSize) / 2;
      const rightX = startX + (Math.cos(rightAngle) * rectSize) / 2;
      const rightY = startY + (Math.sin(rightAngle) * rectSize) / 2;

      // 세모 그리기
      this.ctx.moveTo(tipX, tipY);
      this.ctx.lineTo(leftX, leftY);
      this.ctx.lineTo(rightX, rightY);
      this.ctx.closePath();
      this.ctx.fill();
    }

    // 뱀의 머리 그리기 (trail의 첫 번째 부분) - 동그라미 유지
    if (this.trail.length > 0) {
      const head = this.trail[0];
      this.ctx.fillStyle = "#2E7D32"; // 진한 초록색
      this.ctx.beginPath();
      this.ctx.arc(head.x, head.y, this.headSize, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }
}

export const SnakeRandomWalk = () => {
  const setup = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return new SnakeRandomWalkClass(ctx, canvas.width, canvas.height);
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    state?: unknown,
  ) => {
    // 매 프레임마다 canvas 초기화
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const walker = state as SnakeRandomWalkClass;
    walker.step();
    walker.show();
  };

  return <P5jsCanvas setup={setup} draw={draw} title="Snake Random Walk" />;
};
