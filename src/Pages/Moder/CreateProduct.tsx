import { useCallback, useRef} from "react";
import {Button, Form, Input, InputNumber, Select} from "antd";
import './Conponents/style.css'
import {Option} from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import {View} from '../Home/Components/Product'
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/products/actions";
import {  PlusOutlined } from '@ant-design/icons';

export default function () {

    // @ts-ignore
    const {newProduct} = useSelector(state=> state.products);
    const dispatch = useDispatch();
    const setProducts = useCallback( args => dispatch(actions.setProducts(args)), [dispatch]);
    const createProduct = useCallback(args => dispatch(actions.createProduct(args)), [dispatch]);


    const form = useRef();

    return<div>
        <div className={'form-container'}>
            {/*@ts-ignore*/}
            <Form ref={form} className={'form'}>
                <Form.Item label={'Product name'}>
                    <Input onChange={e=> setProducts({name: e.target.value})}/>
                </Form.Item>
                <Form.Item label={'Type'}>
                    <Select onChange={e=> setProducts({type: e})}>
                        <Option value={'Computer detail'}>Computer detail</Option>
                        <Option value={'Notebook'}>Notebook</Option>
                        <Option value={'PC'}>Personal computer</Option>
                        <Option value={'Another'}>Another</Option>
                    </Select>
                </Form.Item>
                <Form.Item label={'Description'}>
                    <TextArea onChange={e=> setProducts({description: e.target.value})}>{}</TextArea>
                </Form.Item>
                <Form.Item label={'Head Img'}>
                    <Input onChange={e=> setProducts({headImg: e.target.value})} type={'url'}/>
                </Form.Item>
                <Form.Item label={'Count'}>
                    <InputNumber onChange={e=> setProducts({count: e, startCount: e})}/>
                </Form.Item>
                <Form.Item label={'Images'}>
                    <Select mode="tags" style={{ width: '100%' }} onChange={e=> setProducts({images: e})} tokenSeparators={[',']}>
                    </Select>
                </Form.Item>
            </Form>
        </div>
        <div className={'form-view'}>
            <View data={newProduct}/>
        </div>
        <Button type={'primary'} onClick={e=> createProduct(newProduct)} icon={<PlusOutlined />} style={{width: '100%'}}>{'Create'}</Button>
    </div>

}
