import { useState } from 'react';

import { Button, Col, Form, Row } from 'antd';

import { FormItemProps } from '#/typings/components/form';

import FormItem from './FormItems';

const SearchForm = ({ columns }: { columns: FormItemProps[] }) => {
  const [form] = Form.useForm();
  const [expend, setExpend] = useState(false);
  const columnsToShow = expend ? columns : columns.slice(0, 3);

  const onFinish = (values: any) => {
    console.log(values, 'values');
  };
  return (
    <div className='search-form'>
      <Form form={form} onFinish={onFinish}>
        <Row gutter={24}>
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

          <Col span={8} style={{ textAlign: 'right' }}>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} htmlType='reset'>
                重置
              </Button>
              <Button
                style={{ marginLeft: 8 }}
                onClick={() => {
                  setExpend(!expend);
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
