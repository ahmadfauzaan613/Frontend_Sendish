import React, { useEffect, useState } from 'react'
import { SaveOutlined, LeftOutlined, PlusOutlined, SearchOutlined, DeleteOutlined, EditOutlined, InboxOutlined } from '@ant-design/icons'
import { Transition } from 'react-transition-group'
import { Button, Col, Row, Space, Table, Tooltip, Modal, Input, Select, Image, Upload, message } from 'antd'
import { result } from 'lodash'

import { KategoriAllData } from '../../hooks/kategoriHook'

const { TextArea } = Input
const { Option } = Select
const { Dragger } = Upload

function Produk() {
  const [show, setShow] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [detail, setDetail] = useState(null)

  //   HALAMAN ADD
  const [addPage, setAddPage] = useState(false)
  const [view, setView] = useState(false)
  const [fileList, setFileList] = useState([])

  const handleChangeUpload = (info) => {
    const updatedFileList = info.fileList.slice(-1)

    setFileList(updatedFileList)

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  const convertGambar = (data) => {
    return `data:image/jpeg;base64,${data}`
  }

  const [fieldFrom, setFieldFrom] = useState({
    nama_produk: result(detail, 'nama_produk', null),
    deskripsi_produk: result(detail, 'deskripsi_produk', null),
    statusDiskon: result(detail, 'statusDiskon', false),
    harga_lama: result(detail, 'harga_lama', null),
    harga_baru: result(detail, 'harga_baru', null),
    diskon: result(detail, 'diskon', null),
    kategoriProduk: result(detail, 'kategoriProduk', null),
  })

  useEffect(() => {
    setFieldFrom({
      nama_produk: result(detail, 'nama_produk', null),
      deskripsi_produk: result(detail, 'deskripsi_produk', null),
      statusDiskon: result(detail, 'statusDiskon', false),
      harga_lama: result(detail, 'harga_lama', null),
      harga_baru: result(detail, 'harga_baru', null),
      diskon: result(detail, 'diskon', null),
      kategoriProduk: result(detail, 'kategoriProduk', null),
    })
  }, [detail])

  const handleChange = (e, type) => {
    const value = e.target ? e.target.value : e
    setFieldFrom((prevState) => ({
      ...prevState,
      [type]: value === '' ? null : value,
    }))
  }

  useEffect(() => {
    setShow(true)
  }, [])

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(null)

  const page = 1
  const size = 10
  const sortOrder = 'ASC'
  const handleSearch = () => {
    setSearchTerm(search)
    setCategory(category)
  }

  const { data, isLoading, error } = KategoriAllData(searchTerm, page, size, sortOrder, category)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  const produkData = result(data, 'products', [])
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
      title: 'Nama Produk',
      dataIndex: 'nama_produk',
      key: 'nama_produk',
      sorter: (a, b) => a.nama_produk.localeCompare(b.nama_produk),
      render: (nama_produk) => <p>{nama_produk}</p>,
    },
    {
      title: 'Code Produk',
      dataIndex: 'codeProduct',
      key: 'codeProduct',
      render: (codeProduct) => <p>{codeProduct}</p>,
    },
    {
      title: 'Kategori Produk',
      dataIndex: 'kategoriProduk',
      key: 'kategoriProduk',
      render: (kategoriProduk) => <p>{kategoriProduk}</p>,
    },
    {
      title: 'Gambar',
      dataIndex: 'gambar',
      key: 'gambar',
      render: (gambar) => (
        <div className="flex justify-center">
          <Image width={36} src={convertGambar(gambar)} />
        </div>
      ),
    },
    {
      title: 'Harga',
      dataIndex: 'harga_lama',
      key: 'harga_lama',
      render: (harga_lama, record) => <p>{record.harga_baru ? record.harga_baru : harga_lama}</p>,
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
      render: (createdBy) => <p>{createdBy}</p>,
    },
    {
      title: 'Updated By',
      dataIndex: 'updatedBy',
      key: 'updatedBy',
      render: (updatedBy) => <p>{updatedBy ? updatedBy : '-'}</p>,
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
                  setAddPage(!addPage)
                  setDetail(record)
                  setView(true)
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
                  setAddPage(!addPage)
                  setDetail(record)
                  setView(false)
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
      {addPage ? (
        <Transition in={show} timeout={100}>
          {(state) => (
            <div
              style={{
                opacity: state === 'entered' ? 1 : 0,
                transition: 'opacity 500ms ease-in-out',
              }}
            >
              <div className="flex items-center justify-between">
                <Button icon={<LeftOutlined />} onClick={() => setAddPage(!addPage)} type="link" style={{ backgroundColor: 'transparent', borderRadius: '0px', color: '#3d6b2f' }} size="large">
                  Back
                </Button>
                <p className="text-[40px] font-bold"> {detail ? 'Edit / View Produk' : 'Add Produk'}</p>
              </div>
              <div className="space-y-[1rem] my-[2rem]">
                <Input type="text" placeholder="Nama Produk" disabled={view} id="nama_produk" name="nama_produk" value={fieldFrom.nama_produk} onChange={(e) => handleChange(e, 'nama_produk')} style={{ outline: 'none' }} />
                <TextArea rows={3} placeholder="Deskripsi Produk" disabled={view} id="deskripsi_produk" name="deskripsi_produk" value={fieldFrom.deskripsi_produk} onChange={(e) => handleChange(e, 'deskripsi_produk')} style={{ outline: 'none' }} />
                <div>
                  <p className="mb-2 text-gray-400 font-bold">Diskon</p>
                  <Select placeholder="Diskon" disabled={view} value={fieldFrom.statusDiskon} onChange={(val) => handleChange(val, 'statusDiskon')} style={{ width: '100%', height: '42px', borderRadius: '0' }}>
                    <Option value={1}>YA</Option>
                    <Option value={0}>TIDAK</Option>
                  </Select>
                </div>
                <div className="flex items-center justify-between gap-6 ">
                  <Input type="number" placeholder="Harga Lama" disabled={view} id="harga_lama" name="harga_lama" value={fieldFrom.harga_lama} onChange={(e) => handleChange(e, 'harga_lama')} style={{ outline: 'none' }} size="large" />
                  <Input type="number" placeholder="Harga Baru" disabled={view} id="harga_baru" name="harga_baru" value={fieldFrom.harga_baru} onChange={(e) => handleChange(e, 'harga_baru')} style={{ outline: 'none' }} size="large" />
                </div>
                <div>
                  <p className="mb-2 text-gray-400 font-bold">Kategori</p>
                  <Select placeholder="Kategori" disabled={view} value={fieldFrom.kategoriProduk} onChange={(val) => handleChange(val, 'kategoriProduk')} style={{ width: '100%', height: '42px', borderRadius: '0' }}>
                    <Option value="">All</Option>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Dragger accept="image/*" fileList={fileList} disabled={view} onChange={handleChangeUpload} beforeUpload={() => false}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single upload. Strictly prohibit from uploading company data or other band files.</p>
                  </Dragger>
                  <div className="w-full border rounded-md p-2 flex items-center justify-center">
                    <Image width={90} src={detail && detail.gambar ? convertGambar(detail.gambar) : null} />
                  </div>
                </div>
              </div>
              <div className="flex justify-end ">
                <Button icon={<SaveOutlined />} onClick={() => setAddPage(!addPage)} type="primary" style={{ backgroundColor: '#3d6b2f', borderRadius: '0px' }} size="large">
                  {detail ? 'Update' : 'Save'}
                </Button>
              </div>
            </div>
          )}
        </Transition>
      ) : (
        <Transition in={show} timeout={100}>
          {(state) => (
            <div
              style={{
                opacity: state === 'entered' ? 1 : 0,
                transition: 'opacity 500ms ease-in-out',
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-[40px] font-bold">Produk</p>
                <Button
                  onClick={() => {
                    setAddPage(!addPage)
                    setDetail(null)
                    setView(false)
                  }}
                  type="primary"
                  style={{ backgroundColor: '#3d6b2f', borderRadius: '0px' }}
                  icon={<PlusOutlined />}
                  size="large"
                >
                  Add Produk
                </Button>
              </div>
              <Row justify="start" gutter={28} style={{ marginTop: '3rem' }}>
                <Col span={22}>
                  <div className="flex items-center gap-3">
                    <Input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} style={{ height: '42px' }} />
                    <Select placeholder="Select an option" value={category} onChange={(value) => setCategory(value)} style={{ width: 200, height: '42px', borderRadius: '0' }}>
                      <Option value="">All</Option>
                      <Option value="option1">Option 1</Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={1}>
                  <Button onClick={handleSearch} type="primary" size="large" style={{ backgroundColor: '#3d6b2f', borderRadius: '0px' }} icon={<SearchOutlined />}>
                    Search
                  </Button>
                </Col>
              </Row>

              <div className="border border-[#b8d26f] rounded-[9.5px] mt-[2rem]">
                <Table columns={columns} dataSource={produkData} pagination={paginationConfig} scroll={{ y: 400 }} style={{ whiteSpace: 'nowrap', overflowX: 'scroll', width: '100%' }} />
              </div>
            </div>
          )}
        </Transition>
      )}
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

export default Produk
