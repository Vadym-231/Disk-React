import React, {FC, useState} from 'react';
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Layout, Menu,PageHeader } from "antd";
import {DownOutlined, LogoutOutlined, SettingOutlined, SketchOutlined} from '@ant-design/icons';
import {IUser} from "../../types/inext";
import 'antd/dist/antd.css'
import './style.css'
import Text from "antd/es/typography/Text";
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
const { Header } = Layout;

type INavigation =  {
    user?: IUser | null,
    linksList: JSX.Element[],
    logout?: any,
    isAuth: boolean
}

const Navigation = ({ user, isAuth, linksList, logout = () => console.log('Logout') }: INavigation) => {
  const [isOpen, setOpen] = useState(false);

  const userDropdown = (
    <Menu  title={'User'} mode={'horizontal'}>
        <SubMenu key={'1'}  title={<Button icon={<SettingOutlined />}>{user ? user?.email : null}</Button>}>
            <Menu.Item key={'11'} icon={<SettingOutlined />}>Account Settings</Menu.Item>
            <Menu.Divider />
            <Menu.Item key={'22'} danger={true} icon={<LogoutOutlined />} onClick={() => logout()}>Logout</Menu.Item>
        </SubMenu>


    </Menu>
  );

  return (
      <PageHeader
          className="site-page-header"
          style={{background: 'white'}}
          onBack={() => null}
          title={<Link to={''}><SketchOutlined /> <Text italic>{'Disk'}</Text></Link>}
          subTitle={<span className={'content-header'}>
              <span className={'routes'}>{linksList}</span>
              {isAuth ? <span className={'login'}>{userDropdown}</span> : null}

          </span>}
      />
  );
};

export default Navigation;
