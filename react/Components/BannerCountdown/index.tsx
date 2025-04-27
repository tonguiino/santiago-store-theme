import React, { useEffect, useState } from 'react'
import Contador from './Contador'

interface Props {
  dateCountDown: string
}

const BannerCountdown = ({dateCountDown}: Props) => {
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    fetch('/api/checkout/pub/orderForm')
      .then(res => res.json())
      .then(result => setUserEmail(result.clientProfileData.email));
  }, [])

  return (
    <div className='flex justify-center bg-emphasis'>
      <Contador dateCountDown={dateCountDown} userEmail={userEmail} />
    </div>
  )
}

export default BannerCountdown


BannerCountdown.schema = {
  title: "Contador",
  type: "object",
  properties: {
    dateCountDown: {
      title: "Fecha final del contador",
      type: "string",
      "widget": {
        "ui:widget": "date-time"
      }
    }
  }
}