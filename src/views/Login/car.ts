class circle {
  constructor(num, canvas) {
    // 由于react不直接操作dom，所以将canvas对象以形参形式传入
    this.canvas = canvas;
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
    this.ctx = this.canvas.getContext('2d');

    // 创建随机状态小球
    this.arr = Array.from(new Array(num)).map((item) => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      speed: Math.random() * 1.5 + 0.5,
      xDir: Math.random() > 0.5 ? -1 : 1,
      yDir: Math.random() > 0.5 ? -1 : 1,
      r: 2,
    }));
    // 小球连线距离
    this.dist = 40;

    this.animation();

    window.onresize = () => {
      this.canvas.width = document.documentElement.clientWidth;
      this.canvas.height = document.documentElement.clientHeight;
    };
  }

  // 计算小球位置并判断方向与绘制
  drawCircle() {
    this.arr.forEach((item) => {
      item.x += item.xDir * item.speed;
      item.y += item.yDir * item.speed;

      item.x <= 0 && (item.xDir = 1);
      item.x > this.canvas.width - 1 && ((item.xDir = -1), (item.x = this.canvas.width - 1));

      item.y <= 0 && (item.yDir = 1);
      item.y > this.canvas.height - 1 && ((item.yDir = -1), (item.y = this.canvas.height - 1));

      this.ctx.beginPath();
      this.ctx.arc(item.x, item.y, item.r, 0, 2 * Math.PI);
      // this.ctx.fillStyle = 'rgb(26,52,135)';
      this.ctx.fill();
    });
  }

  // 计算连线距离内的小球
  calcLine() {
    const arr = this.arr.concat();
    this.lineArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      for (let y = i + 1; y < len; y++) {
        const val = Math.sqrt(Math.pow(arr[i].x - arr[y].x, 2) + Math.pow(arr[i].y - arr[y].y, 2), 2);
        if (val < this.dist) {
          this.lineArr.push({
            start: arr[i],
            end: arr[y],
            val: val,
            ratio: val / this.dist,
          });
        }
      }
    }
  }

  // 绘制链接线条
  drawLine() {
    while (this.lineArr.length) {
      this.ctx.beginPath();
      const item = this.lineArr.shift();
      const r = 255 * item.ratio;
      const g = 255 * item.ratio;
      const b = 255 * item.ratio;

      this.ctx.strokeStyle = `rgb(${r},${g},${b})`;
      this.ctx.moveTo(item.start.x, item.start.y);
      this.ctx.lineTo(item.end.x, item.end.y);
      // 线宽设置，必须放在绘制之前
      // this.ctx.lineWidth = 4;
      this.ctx.stroke();
    }
  }

  // 动画过渡
  animation() {
    this.canvas.width = this.canvas.width;
    this.drawCircle();
    this.calcLine();
    this.drawLine();
    setTimeout(() => {
      this.animation();
    }, 30);
  }
}
export default circle;
