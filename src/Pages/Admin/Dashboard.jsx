import React, { useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import Navbar from '../../Components/Admin/Navbar'

import User from '../../Pages/Admin/User'
import { Layout, theme } from 'antd'
import Home from '../../Pages/Admin/Home'
import Produk from './Produk'
import Transaksi from './Transaksi'

const { Content } = Layout

function Dashboard() {
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
      case '3':
        return <Produk />
      case '4':
        return <Transaksi />
      default:
        return
    }
  }

  const items = [
    {
      key: '1',
      label: <p>Change Password</p>,
    },
    {
      key: '2',
      label: <p>Log out</p>,
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onClick={handleMenuClick} activeKey={activePage} />
      <Layout>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} items={items} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            position: 'relative',
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
