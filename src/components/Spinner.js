import './spinner.css'
const Spinner =() =>{
    return (
        <div className=' flex justify-center flex-col items-center h-[80vh] gap-y-3 '>
        <div className='spinner '>
        </div>
        <div className='font-bold text-xl'>Loading..</div>
        </div>
    )
}
export default Spinner;