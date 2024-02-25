import React from 'react'
import HospitalTable from './HospitalTable'

function Hospital() {
  return (
    <>
    <div>
    <h1 className='text-center text-5xl m-4'> En Yakın Hastanelerimiz </h1>     
    </div>
    <div className="lg:col-span-3">      
    <HospitalTable  />   
    </div>
    </>
  )
}

export default Hospital