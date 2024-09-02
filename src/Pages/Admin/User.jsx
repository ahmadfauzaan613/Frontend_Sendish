import React, { useEffect, useState } from 'react'
import { PlusOutlined, SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Transition } from 'react-transition-group'
import { Button, Col, Row, Space, Table, Tooltip, Modal, Input } from 'antd'
import { UserAllData } from '../../hooks/userHook'
import { result } from 'lodash'
import moment from 'moment'

const { TextArea } = Input

function ItemDetail(props) {
  const { title, value } = props
  return (
    <div className="flex items-center justify-between text-right">
      <p>{title}</p>
      <p className="text-nowrap overflow-hidden w-[12vw] text-ellipsis">{value}</p>
    </div>
  )
}

function User() {
  const username = localStorage.getItem('username')
  const [show, setShow] = useState(false)
  const [modalDetail, setModalDetail] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [detail, setDetail] = useState(null)

  const [fieldFrom, setFieldFrom] = useState({
    nama_lengkap: result(detail, 'nama_lengkap', null),
    no_handphone: result(detail, 'no_handphone', null),
    alamat: result(detail, 'alamat', null),
    password: null,
  })

  useEffect(() => {
    setFieldFrom({
      nama_lengkap: result(detail, 'nama_lengkap', null),
      no_handphone: result(detail, 'no_handphone', null),
      alamat: result(detail, 'alamat', null),
      password: null,
    })
  }, [detail])

  const handleChange = (e, type) => {
    const { value } = e.target
    setFieldFrom((prevState) => ({
      ...prevState,
      [type]: value === '' ? null : value,
    }))
  }

  useEffect(() => {
    setShow(true)
  }, [])

  const [search, setSearch] = useState('')
  const page = 1
  const size = 10
  const sortOrder = 'ASC'

  const handleSearch = () => {
    setSearchTerm(search)
  }

  const { data, isLoading, error } = UserAllData(searchTerm, page, size, sortOrder)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  const userData = result(data, 'data', [])
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
      title: 'Nama Lengkap',
      dataIndex: 'nama_lengkap',
      key: 'nama_lengkap',
      sorter: (a, b) => a.nama_lengkap.localeCompare(b.nama_lengkap),
      render: (nama_lengkap) => <p>{nama_lengkap}</p>,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (username) => <p>{username}</p>,
    },
    {
      title: 'No.Handphone',
      dataIndex: 'no_handphone',
      key: 'no_handphone',
      render: (no_handphone) => <p>{no_handphone}</p>,
    },
    {
      title: 'Alamat',
      dataIndex: 'alamat',
      key: 'alamat',
      render: (alamat) => <p>{alamat}</p>,
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
                  setModalDetail(!modalDetail)
                }}
                type="primary"
                size="small"
                shape="circle"
                icon={<SearchOutlined />}
              />
            </Tooltip>

            {username === 'superadmin' && (
              <Tooltip title="Edit">
                <Button
                  onClick={() => {
                    setDetail(record)
                    setModalEdit(!modalEdit)
                  }}
                  type="primary"
                  style={{ backgroundColor: '#ffc53d' }}
                  size="small"
                  shape="circle"
                  icon={<EditOutlined />}
                />
              </Tooltip>
            )}
            {username === 'superadmin' && (
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
            )}
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
            <div className="flex items-center justify-between">
              <p className="text-[40px] font-bold">User</p>
              {username === 'superadmin' && (
                <Button type="primary" style={{ backgroundColor: '#3d6b2f', borderRadius: '0px' }} icon={<PlusOutlined />} size="large">
                  Add User
                </Button>
              )}
            </div>
            <Row justify="start" gutter={28} style={{ marginTop: '3rem' }}>
              <Col span={22}>
                <Input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} style={{ height: '42px' }} />
              </Col>
              <Col span={1}>
                <Button onClick={handleSearch} type="primary" size="large" style={{ backgroundColor: '#3d6b2f', borderRadius: '0px' }} icon={<SearchOutlined />}>
                  Search
                </Button>
              </Col>
            </Row>

            <div className="border border-[#b8d26f] rounded-[9.5px] mt-[2rem]">
              <Table columns={columns} dataSource={userData} pagination={paginationConfig} scroll={{ y: 400 }} />
            </div>
          </div>
        )}
      </Transition>
      <Modal width={400} title={'Detail User'} open={modalDetail} onCancel={() => setModalDetail(false)} footer={[]}>
        <div className="space-y-2 mt-8">
          <ItemDetail title={'Id'} value={result(detail, 'id', null)} />
          <ItemDetail title={'Nama Lengkap'} value={result(detail, 'nama_lengkap', null)} />
          <ItemDetail title={'Username'} value={result(detail, 'username', null)} />
          <ItemDetail title={'Alamat'} value={result(detail, 'alamat', null)} />
          <ItemDetail title={'Role'} value={result(detail, 'role', null)} />
          <ItemDetail title={'No Handphone'} value={result(detail, 'no_handphone', null)} />
          <ItemDetail title={'Created At'} value={moment(result(detail, 'createdAt', null)).format('YYYY-MM-DD')} />
          <ItemDetail title={'Updated At'} value={moment(result(detail, 'updatedAt', null)).format('YYYY-MM-DD')} />
        </div>
      </Modal>
      <Modal
        title={'Edit User'}
        open={modalEdit}
        onCancel={() => setModalEdit(false)}
        footer={[
          <div className="flex-col items-center justify-between gap-3">
            <Button key="submit" type="primary" style={{ backgroundColor: 'green', borderColor: 'green', display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', width: '100%' }}>
              Update
            </Button>
            <Button onClick={() => setModalEdit(false)} key="Cancelsubmit" type="default" style={{ borderColor: 'red', color: 'red', display: 'flex', justifyContent: 'center', width: '100%' }}>
              Cancel
            </Button>
          </div>,
        ]}
      >
        <div className="mt-5 space-y-3">
          <Input placeholder="Nama Lengkap" value={fieldFrom.nama_lengkap} onChange={(e) => handleChange(e, 'nama_lengkap')} />
          <Input type="number" placeholder="No. Handphone" value={fieldFrom.no_handphone} onChange={(e) => handleChange(e, 'no_handphone')} />
          <TextArea rows={3} placeholder="Alamat" value={fieldFrom.alamat} onChange={(e) => handleChange(e, 'alamat')} />
          <Input.Password placeholder="Password" value={fieldFrom.password} onChange={(e) => handleChange(e, 'password')} />
        </div>
      </Modal>
      <Modal
        title={'Delete User'}
        open={modalDelete}
        onCancel={() => setModalDelete(false)}
        footer={[
          <div className="flex items-center justify-end gap-3">
            <Button key="submit" type="primary" style={{ backgroundColor: 'green', borderColor: 'green', display: 'flex', justifyContent: 'center' }}>
              Delete
            </Button>
            <Button onClick={() => setModalDelete(false)} key="Cancelsubmit" type="default" style={{ borderColor: 'red', color: 'red', display: 'flex', justifyContent: 'center' }}>
              Cancel
            </Button>
          </div>,
        ]}
      >
        <p>Are you sure you want to delete this data ?</p>
      </Modal>
    </React.Fragment>
  )
}

export default User
