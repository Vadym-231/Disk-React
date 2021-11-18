import {Button, Form, Input} from "antd";
import './Components/style.css'
import Text from "antd/es/typography/Text";
import {  SketchOutlined } from '@ant-design/icons';
import {createRef, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/auth/actions";
import {Redirect} from 'react-router-dom'

export default function () {

    // @ts-ignore
    const {isSuccessAuth} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const login = useCallback(args => dispatch(actions.login(args)), [dispatch]);
    const [user, setUser] = useState({
        password: '',
        email: ''
    });
    const form = createRef();

    const auth = async () => {
        try {
            // @ts-ignore
            await form.current.validateFields();
            login(user);

        }catch (e) {
            console.log('Bad data!');
        }
    }


    return isSuccessAuth ? <Redirect to={'/'}>{}</Redirect> :<div className={'login-container'}>

        <div className={'login-form'} >
            <Text className={'login-title'} italic strong>{'Disk'} <SketchOutlined /> </Text>
            {/*@ts-ignore*/}
            <Form ref={form}>
                <Form.Item valuePropName={'user.email'} name={'email'} >
                    <Input type={'email'} onChange={e=> setUser({...user,email: e.target.value})}/>
                </Form.Item>
                <Form.Item name={'password'} valuePropName={'user.password'} rules={[{required: true}]}>
                    <Input type={'password'} value={user.password} onChange={e=> setUser({...user,password: e.target.value})}/>
                </Form.Item>
            </Form>
            <Button onClick={()=> auth()} style={{width: '100%'}}>{'Login'}</Button>
        </div>


    </div>
}