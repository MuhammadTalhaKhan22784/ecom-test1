import React from 'react'
import { Menu, Divider } from 'antd';
import {
  AppstoreOutlined, MailOutlined, SettingOutlined,
  CalendarOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const MainDropdown = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  // const onOpenChange = keys => {
  //   const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };

  return (
    <React.Fragment>
      <Divider type="vertical" />

      <Menu mode="inline" style={{ width: 200 }}>
        <SubMenu  key="sub1" title="Navigation One">

          <SubMenu key="sub2" title="Navigation Two">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu mode="vertical" key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>


        </SubMenu>
      </Menu>
    </React.Fragment>

  );
};

export default MainDropdown;