import { ReactNode } from 'react';
import { getRandom } from '@/utils/Other.ts';
const ctx: any;
class BgCanvas {
  canvas: any;
  num: number;
  ctx: any;

  constructor(num: number, canvase: ReactNode) {
    this.num = num;
    this.canvas = canvase;
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
    ctx = this.canvas.getContext('2d');
  }
  // 绘制点
  poin() {}
}
// 画点
class Point {
  constructor() {
    this.r = 6; // 点的边境和
    this.x = getRandom(0, cvs.width - this.r / 2);
    this.y = getRandom(0, cvs.height - this.r / 2);
    this.xSpeed = getRandom(-50, 50);
    this.ySpeed = getRandom(-50, 50);
    this.lastdrawTime = null;
  }
  draw() {
    if (this.lastdrawTime) {
      // 获取新的坐标
      const duration = (Date.now() - this.lastdrewTime) / 1000;
      // 距离
      const xDis = this.xSpeed * duration,
        yDis = this.ySpeed * duration;
      //  新坐标
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2);
    ctx.fillStyle = `rgba(200,200,200,0.5)`;
    ctx.fill();
  }
}
