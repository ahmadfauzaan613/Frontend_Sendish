import React from 'react'
import SuccessImg from '../../Assets/undraw_agree_re_hor9.svg'
import { Button, Modal } from 'antd'

function SuccessModal(props) {
  const { open, onCancel, message } = props
  return (
    <Modal
      title={'Success'}
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="submit" type="primary" style={{ backgroundColor: 'green', borderColor: 'green', display: 'flex', justifyContent: 'center', marginTop: '40px', width: '100%' }} onClick={onCancel}>
          Done
        </Button>,
      ]}
    >
      <div className="flex justify-center my-4">
        <img src={SuccessImg} alt="Success" className="w-[15vw] h-full" />
      </div>
      <p className="text-center text-2xl pt-3">{message}</p>
    </Modal>
  )
}

export default SuccessModal
