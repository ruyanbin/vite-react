import { FormItemProps } from "#/typings/components/form";
import { Input, Radio, Select } from "antd";

const FormItem=(Item:FormItemProps)=>{
    if(Item.renderFormItem) {
        return Item.renderFormItem();
    }
    if(Item.type==='select') {
        return <Select placeholder={`请选择${Item.title}`} {...Item} options={Item.options || []} />
    }
    
    if(Item.type==='Radio') {
        return <Radio.Group  {...Item}/>
    }

    if(Item.type==='date') {
        return <Input type="date" placeholder={`请选择${Item.title}`} {...Item}/>
    }
    if(Item.type==='datetime') {
        return <Input type="datetime-local" placeholder={`请选择${Item.title}`} {...Item}/>
    }

    return <Input placeholder={`请输入${Item.title}`} {...Item}/>
    
}

export default FormItem;