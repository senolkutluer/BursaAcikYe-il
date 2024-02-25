import BeachTable from './BeachTable'

export default function Beach({searchTerm}) {
  return (
    <>
    <div>
    <h1 className='text-center text-5xl m-4'>Plajlarımız</h1>
    </div>
    <div className="lg:col-span-3">
             
    <BeachTable  searchTerm={searchTerm} />
 
    </div>
    </>
  )
}
