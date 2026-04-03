import { DatePicker, Input, Radio, Select } from 'antd';

import { FormItemProps } from '#/typings/components/form';

/**
 * 表单项组件
 * 根据不同的类型渲染不同的表单控件
 * @param {FormItemProps} item - 表单项的属性配置对象
 */
const FormItem = (item: FormItemProps) => {
  // 从item中解构出表单项的各个属性
  const { title, type, renderFormItem, options, dataIndex, ...restProps } = item;

  // 如果有自定义渲染函数，则优先使用自定义渲染
  if (renderFormItem) {
    return renderFormItem();
  }

  // 根据不同的表单项类型渲染不同的控件
  if (type === 'select') {
    return <Select allowClear placeholder={`请选择${title}`} options={options || []} {...restProps} />;
  }

  // 渲染单选按钮组
  if (type === 'Radio') {
    return <Radio.Group {...restProps} />;
  }

  // 渲染日期选择器
  if (type === 'date') {
    return <DatePicker allowClear className='w-full' placeholder={`请选择${title}`} {...restProps} />;
  }

  // 渲染日期时间选择器
  if (type === 'datetime') {
    return <Input allowClear type='datetime-local' placeholder={`请选择${title}`} {...restProps} />;
  }

  // 渲染文本域
  if (type === 'textarea') {
    return <Input.TextArea allowClear placeholder={`请输入${title}`} {...restProps} />;
  }

  // 默认渲染普通输入框
  return <Input allowClear placeholder={`请输入${title}`} {...restProps} />;
};

export default FormItem;
