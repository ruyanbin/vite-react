import { Card } from 'antd';
import React from 'react';

function Comp() {
  return (
    <Card title="react 组件的核心属性">
      1. 状态 / this.state
      <p>理解：state 是组件对象最重要的属性，值是== 队形</p>
      <p> 组件被称为状态机，通过更新组件的state 来更新对应页面的渲染</p>
      <b>注意:</b>
      <ul>
        <li>组件中render 方法中的this 为组件实例对象</li>
        <li>
          组件中兹定于i方法中的this 为undefined(作为事件回调适应)，如何解决？
          <p>1 强制绑定this, 通过函数对象的bind()</p>
          <p>2 箭头函数</p>
        </li>
        <li>状态数据 不能直接更新或修改 要用setState</li>
      </ul>
      <br />2 props
      <b> 1. 理解</b>
      <p> 每个组件都有props属性</p>
      <p>组件标签中的所有属性都在props 中</p>
      <b>2. 作用</b>
      <p>通过标签属性从组件外向组件内部传递变化的数据</p>
      <p>注意组件内部不要修改prop</p>
      <b>3.编码操作</b>
      <p>内部读取某个属性值：this.props.name</p>
      <p>对prop 中的属性值进行类型限制和必要性限制 导入第三方prop-types </p>
    </Card>
  );
}

export default Comp;
