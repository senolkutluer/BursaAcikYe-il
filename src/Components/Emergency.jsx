import React from 'react'
import EmergencyTable from './EmergencyTable'

function Emergency() {
  return (
    <>
    <div>
    <h1 className='text-center text-5xl m-4'>En Yakın İtfaiye Birimlerimiz</h1>
    </div>
    <div className="lg:col-span-3">        
    <EmergencyTable   />
     </div>
    </>
  )
}
export default Emergency
