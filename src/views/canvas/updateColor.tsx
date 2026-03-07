import { useEffect, useRef } from 'react';

import imgUrl from '#a/images/194651nzb2ybimi572ifie.jpg';

function UpdateColor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const init = (ctx: CanvasRenderingContext2D | null | undefined, cvs: HTMLCanvasElement | null) => {
    console.log(2);
    const img = new Image();
    img.onload = () => {
      console.log(img, 'img');
      if (cvs) {
        cvs.width = img.width / 4;
        cvs.height = img.height / 4;
      }
      ctx?.drawImage(img, 0, 0, img.width / 4, img.height / 4);
    };
    img.src = imgUrl;
  };
  const diff = (color1: number[], color2: number[]) => {
    return (
      Math.abs(color1[0] - color2[0]) +
      Math.abs(color1[1] - color2[1]) +
      Math.abs(color1[2] - color2[2]) +
      Math.abs(color1[3] - color2[3])
    );
  };
  // 话哦去像素点
  const pointzInedx = (x: number, y: number, cvs: HTMLCanvasElement) => {
    return (y * cvs.width + x) * 4;
  };
  // 获取颜色
  const getColor = (x: number, y: number, imgData: Uint8ClampedArray, cvs: HTMLCanvasElement) => {
    const index = pointzInedx(x, y, cvs);

    return [imgData[index], imgData[index + 1], imgData[index + 2], imgData[index + 3]];
  };

  const _changeColor = (
    x: number,
    y: number,
    targetColor: number[],
    imageData: ImageData,
    cvs: HTMLCanvasElement,
    centerColor: number[]
  ) => {
    const stack = [[x, y]];
    while (stack.length > 0) {
      const point = stack.pop();
      if (!point) continue;
      const [x, y] = point;
      const i = pointzInedx(x, y, cvs);
      const color = getColor(x, y, imageData.data, cvs);
      if (x < 0 || x > cvs.width || y < 0 || y > cvs.height) {
        continue;
      }
      // 判断与原本的颜色
      if (diff(color, targetColor) == 0) {
        continue;
      }
      // 判断与改变后的颜色
      if (diff(color, centerColor) > 100) {
        continue;
      }

      imageData.data.set(targetColor, i);
      stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
    }
  };
  useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs?.getContext('2d', {
      willReadFrequently: true,
    });
    init(ctx, cvs);
    cvs?.addEventListener('click', (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const imageData = ctx?.getImageData(0, 0, cvs.width, cvs.height);
      if (!imageData) return;
      const centerColor = getColor(x, y, imageData.data, cvs);
      _changeColor(x, y, [255, 0, 0, 255], imageData, cvs, centerColor);
      ctx?.putImageData(imageData, 0, 0);
    });
  }, []);
  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
export default UpdateColor;
