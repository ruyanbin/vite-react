export interface FormItemProps { 
   type?: string;
    dataIndex: string;
    title: string;
    rules?: any[];
    options?: { label: string; value: string }[];
    renderFormItem?: () => React.ReactNode;
    onClick?: () => void;
    onChange?: (value: any) => void;
    // 其他属性
    [key: string]: any;

}