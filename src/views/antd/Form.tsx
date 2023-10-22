import { Card } from 'antd';
import React from 'react';
import BasicForm from './FormItem/Basic';
import PreFormItem from './FormItem/PreFormItem';

function AntdForm() {
  return (
    <>
      <Card>
        <BasicForm />
        <PreFormItem />
      </Card>
    </>
  );
}

export default AntdForm;
