import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

import User from '../../Pages/Admin/User'
import { Layout, theme } from 'antd'
import Home from '../../Pages/Admin/Home'

const { Content } = Layout

function LayoutParent() {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const [activePage, setActivePage] = useState('1')

  const handleMenuClick = (key) => {
    setActivePage(key)
  }

  const renderContent = () => {
    switch (activePage) {
      case '1':
        return <Home />
      case '2':
        return <User />
      default:
        return
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onClick={handleMenuClick} activeKey={activePage} />
      <Layout>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutParent
