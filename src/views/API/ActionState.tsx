import { useActionState } from 'react';

import { Card } from 'antd';

async function increment(num: number | string): Promise<string | number> {
  console.log('increment', num);
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return '无法加入购物车：商品已售罄';
  // return num + 1;
}

const ActionState = () => {
  const [state, formAction, isPending] = useActionState(increment, 0);
  return (
    <>
      <Card title='useActionState'>
        {state}----{isPending}
        <span className='cursor-pointer' onClick={() => formAction()}>
          increment
        </span>
      </Card>
    </>
  );
};
export default ActionState;
