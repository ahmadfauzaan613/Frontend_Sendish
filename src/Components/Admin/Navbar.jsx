import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Layout, Dropdown, Avatar } from 'antd'

const { Header } = Layout

function Navbar(props) {
  const { collapsed, setCollapsed, items } = props
  return (
    <Header
      style={{
        padding: 0,
        background: '#b8d26f',
      }}
    >
      <div className="flex items-center justify-between pr-[1rem]">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            color: 'white',
          }}
        />
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Avatar size="medium" className="cursor-pointer " icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}

export default Navbar
