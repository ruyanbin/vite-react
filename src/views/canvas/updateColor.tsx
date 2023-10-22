import React, { useEffect, useRef, useState } from 'react';
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
  const pointzInedx = (x, y, cvs) => {
    return (y * cvs.width + x) * 4;
  };
  // 获取颜色
  const getColor = (x: any, y: any, imgData: Uint8ClampedArray | undefined, cvs: any) => {
    const index = pointzInedx(x, y, cvs);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return [imgData[index], imgData[index + 1], imgData[index + 2], imgData[index + 3]];
  };
  // 改变颜色
  const changeColor = (x, y, targetColor, imageData, cvs) => {
    const index = pointzInedx(x, y, cvs);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    imageData.set(targetColor, index);
  };
  const _changeColor = (x, y, targetColor, imageData, cvs, centerColor) => {
    const stack = [[x, y]];
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      const i = pointzInedx(x, y, cvs);
      const color = getColor(x, y, imageData.data, cvs);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (x < 0 || x > cvs.width || y < 0 || y > cvs.height) {
        continue;
      }
      // 判断与原本的颜色
      if (diff(color, targetColor) == 0) {
        continue;
      }
      // 判断与改变后的颜色
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (diff(color, centerColor) > 100) {
        continue;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      console.log(targetColor, i, 'targetColor');
      imageData.data.set(targetColor, i);
      //   imageData.data[i] = targetColor[0];
      //   imageData.data[i + 1] = targetColor[1];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      //   imageData.data[i + 2] = targetColor[2];
      //   imageData.data[i + 3] = targetColor[3];

      stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
    }
  };
  useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs?.getContext('2d', {
      willReadFrequently: true,
    });
    console.log(ctx, 'xtx');
    init(ctx, cvs);

    cvs?.addEventListener('click', (e) => {
      // 1 获取点击位置
      const x: number = e.offsetX;
      const y: number = e.offsetY;
      console.log(x, y);
      // 获取颜色
      const imageData = ctx?.getImageData(0, 0, cvs.width, cvs.height);
      if (imageData) {
        const clickColor = getColor(x, y, imageData.data, cvs);
        console.log(clickColor, 'clickColor');
        _changeColor(x, y, [0, 0, 0, 255], imageData, cvs, clickColor);
        // g改变颜色
        // changeColor(x, y, [0, 0, 0, 255], imageData.data, cvs);
        ctx?.putImageData(imageData, 0, 0);
      }
    });
  }, []);
  return (
    <>
      <img className="w-40 h-30 m-2" src={imgUrl} alt="" />
      <canvas ref={canvasRef}></canvas>
    </>
  );
}

export default UpdateColor;
