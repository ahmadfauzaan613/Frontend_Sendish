import React, { useState } from 'react'
import Layout from '../../Components/User/Layout'

function Keranjang() {
  const [user, setUser] = useState(false)
  return (
    <React.Fragment>
      <Layout navbar={true} whatsapp={true} footer={false}>
        <div className="container mx-auto mt-10 ">
          <p>xxx</p>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Keranjang
