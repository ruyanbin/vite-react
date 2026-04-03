import { useState } from 'react';

import { Button, Col, Form, Row } from 'antd';

import { FormItemProps } from '#/typings/components/form';

import FormItem from './FormItems';

/**
 * 搜索表单组件
 * @param columns - 表单项配置数组，每个元素包含表单字段的属性
 * @param onSubmit - 表单提交回调函数，接收表单值作为参数
 */
const SearchForm = ({ columns, onSubmit }: { columns: FormItemProps[]; onSubmit?: (values: any) => void }) => {
  // 使用Form.useForm创建表单实例
  const [form] = Form.useForm();
  // 控制表单展开/收起的状态
  const [expend, setExpend] = useState(false);
  // 根据展开状态决定显示的表单项数量
  const columnsToShow = expend ? columns : columns.slice(0, 2);

  /**
   * 表单提交处理函数
   * @param values - 表单值对象
   */
  const onFinish = (values: any) => {
    console.log(values, 'values'); // 打印表单值
    // 如果有提交回调函数，则调用它并传入表单值
    onSubmit?.(values);
  };
  return (
    <div className='search-form'>
      {/* 使用Form组件，传入表单实例和提交处理函数 */}
      <Form form={form} onFinish={onFinish}>
        {/* 使用Row组件创建栅格布局 */}
        <Row gutter={24}>
          {/* 遍历要显示的表单项配置数组，渲染表单字段 */}
          {columnsToShow.map((item) => {
            return (
              <Col key={item.dataIndex} span={8}>
                <Form.Item
                  name={item.dataIndex}
                  label={item.title}
                  rules={item.rules || [{ required: false, message: `请输入${item.title}` }]}
                >
                  <FormItem {...item} />
                </Form.Item>
              </Col>
            );
          })}

          {/* 操作按钮区域 */}
          <Col span={8} style={{ textAlign: 'left' }}>
            <Form.Item>
              {/* 查询按钮 */}
              <Button type='primary' htmlType='submit'>
                查询
              </Button>
              {/* 重置按钮 */}
              <Button style={{ marginLeft: 8 }} htmlType='reset'>
                重置
              </Button>
              {/* 展开/收起按钮 */}
              <Button
                style={{ marginLeft: 8 }}
                onClick={() => {
                  setExpend(!expend); // 切换展开/收起状态
                }}
              >
                展开/收起
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
