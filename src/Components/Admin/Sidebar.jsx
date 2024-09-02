import React from 'react'
import Logo1 from '../../Assets/Logo_1-removebg-preview.png'
import { CreditCardOutlined, DatabaseOutlined, FileImageOutlined, UploadOutlined, HomeOutlined, UserOutlined, EuroCircleOutlined, ProductOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const { Sider } = Layout

function Sidebar(props) {
  const { collapsed, onClick, activeKey } = props

  return (
    <Sider width="13vw" theme="light" trigger={null} collapsible collapsed={collapsed}>
      <div className={`${collapsed ? 'hidden fade-in' : 'fade-in'} py-[7px] flex justify-center`}>
        <img src={Logo1} clas alt="Logo Sendish" className="w-[4.5vw] h-auto" />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        selectedKeys={[activeKey]}
        style={{ marginTop: '1rem' }}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Dashboard',
            onClick: () => onClick('1'),
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: 'User',
            onClick: () => onClick('2'),
          },
          {
            key: '3',
            icon: <ProductOutlined />,
            label: 'Produk',
            onClick: () => onClick('3'),
          },
          {
            key: '4',
            icon: <EuroCircleOutlined />,
            label: 'Transaksi',
            onClick: () => onClick('4'),
          },
          {
            key: '5',
            icon: <DatabaseOutlined />,
            label: 'Kategori',
            onClick: () => onClick('5'),
          },
          {
            key: '6',
            icon: <FileImageOutlined />,
            label: 'Banner',
            onClick: () => onClick('6'),
          },

          {
            key: '7',
            icon: <CreditCardOutlined />,
            label: 'Sistem Pembayaran',
            onClick: () => onClick('7'),
          },
          // {
          //   key: '8',
          //   icon: <UploadOutlined />,
          //   label: 'Child',
          //   children: [
          //     {
          //       key: 8,
          //       label: `option${8}`,
          //       onClick: () => onClick('8'),
          //     },
          //     {
          //       key: 9,
          //       label: `option${9}`,
          //       onClick: () => onClick('9'),
          //     },
          //   ],
          // },
        ]}
      />
    </Sider>
  )
}

export default Sidebar
