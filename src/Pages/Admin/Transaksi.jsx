import React, { useEffect, useState } from 'react'
import { SaveOutlined, LeftOutlined, PlusOutlined, SearchOutlined, DeleteOutlined, EditOutlined, InboxOutlined } from '@ant-design/icons'
import { Transition } from 'react-transition-group'
import { Button, Col, Row, Space, Table, Tooltip, Modal, Input, Select, Image, Upload, message } from 'antd'
import { result } from 'lodash'

import { TransaksiAllData } from '../../hooks/transasksiHook'

const { Option } = Select

function Transaksi() {
  const [show, setShow] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [detail, setDetail] = useState(null)

  const convertGambar = (data) => {
    return `data:image/jpeg;base64,${data}`
  }

  useEffect(() => {
    setShow(true)
  }, [])

  const [codeTransaksi, setCodeTransaksi] = useState('')
  const [namaLengkap, setNamaLengkap] = useState('')
  const [metodePembayaran, setMetodePembayaran] = useState('')
  const [sistemPembayaran, setSistemPembayaran] = useState('')
  const [statusPembelian, setStatusPembelian] = useState('')
  const [category, setCategory] = useState(null)

  const page = 1
  const size = 10
  const sortOrder = 'ASC'
  const handleSearch = () => {
    setCodeTransaksi(codeTransaksi)
    setCategory(category)
  }

  const { data, isLoading, error } = TransaksiAllData(page, size, sortOrder, codeTransaksi, namaLengkap, metodePembayaran, sistemPembayaran, statusPembelian)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  const transaksiData = result(data, 'transaksi', [])
  const pagination = result(data, 'pagination', { totalData: 0, page: 1, size: 10 })
  const paginationConfig = {
    showQuickJumper: false,
    pageSize: pagination.size,
    total: pagination.totalData,
    current: pagination.page,
    showSizeChanger: false,
  }
  const columns = [
    {
      title: 'No',
      key: 'no',
      render: (_, __, index) => index + 1,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Space size="small">
            <Tooltip title="Detail">
              <Button
                onClick={() => {
                  setDetail(record)
                }}
                type="primary"
                size="small"
                shape="circle"
                icon={<SearchOutlined />}
              />
            </Tooltip>
            <Tooltip title="Edit">
              <Button
                type="primary"
                onClick={() => {
                  setDetail(record)
                }}
                style={{ backgroundColor: '#ffc53d' }}
                size="small"
                shape="circle"
                icon={<EditOutlined />}
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                onClick={() => {
                  setModalDelete(!modalDelete)
                  setDetail(record)
                }}
                type="primary"
                danger
                size="small"
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </Space>
        </div>
      ),
    },
  ]

  return (
    <React.Fragment>
      <Transition in={show} timeout={100}>
        {(state) => (
          <div
            style={{
              opacity: state === 'entered' ? 1 : 0,
              transition: 'opacity 500ms ease-in-out',
            }}
          >
            <p className="text-[40px] font-bold">Transaksi</p>

            <Row justify="start" gutter={28} style={{ marginTop: '3rem' }}>
              <Col span={22}>
                {/* <div className="flex items-center gap-3">
                  <Input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} style={{ height: '42px' }} />
                  <Select placeholder="Select an option" value={category} onChange={(value) => setCategory(value)} style={{ width: 200, height: '42px', borderRadius: '0' }}>
                    <Option value="">All</Option>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
                  </Select>
                </div> */}
              </Col>
              <Col span={1}>
                <Button onClick={handleSearch} type="primary" size="large" style={{ backgroundColor: '#3d6b2f', borderRadius: '0px' }} icon={<SearchOutlined />}>
                  Search
                </Button>
              </Col>
            </Row>

            <div className="border border-[#b8d26f] rounded-[9.5px] mt-[2rem]">
              <Table columns={columns} dataSource={transaksiData} pagination={paginationConfig} scroll={{ y: 400 }} style={{ whiteSpace: 'nowrap', overflowX: 'scroll', width: '100%' }} />
            </div>
          </div>
        )}
      </Transition>
    </React.Fragment>
  )
}

export default Transaksi
