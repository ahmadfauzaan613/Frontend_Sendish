import React from 'react'
import FailedImg from '../../Assets/undraw_warning_re_eoyh.svg'
import { Button, Modal } from 'antd'

function FailedModal(props) {
  const { open, onCancel, message } = props
  return (
    <Modal
      title={'Failed'}
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="submit" type="primary" style={{ backgroundColor: 'red', borderColor: 'red', display: 'flex', justifyContent: 'center', marginTop: '40px', width: '100%' }} onClick={onCancel}>
          Close
        </Button>,
      ]}
    >
      <div className="flex justify-center my-4">
        <img src={FailedImg} alt="Failed" className="w-[15vw] h-full" />
      </div>
      <p className="text-center text-2xl pt-3">{message}</p>
    </Modal>
  )
}

export default FailedModal
