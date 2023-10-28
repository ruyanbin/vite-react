import { Card } from 'antd';
import React from 'react';
import Father from './formComponent/Father';
function Formal() {
  return (
    <div>
      <Card className="mb-1" title="父组件向子组件传值">
        在父组件中，需要给传递数据的子组件添加一个自定义属性，在子组件中通过this.props 就可以获取到父组件传递过去的数据
        <Father />
      </Card>
      <Card className="mb-1" title="子组件向父组件传值">
        子组件向父组件传值的话，需要在父组件设置接受函数 和state 同时将函数名通过props传递给子组件
      </Card>
      <Card className="mb-1" title="状态提升">
        将多个组件都要使用到的状态提升到离他们最近的父组件上 然后父组件通过props 分发给子组件
      </Card>
    </div>
  );
}

export default Formal;
