import { Link } from 'react-router-dom'
import errorImage from '../../assets/imgs/error.svg'
export default function NotFound() {
  return (
    <>
    <div className='flex flex-col justify-center items-center py-20 '>
    <img src={errorImage} alt="" className='' />
    <h2 className='mt-5 text-xl'>Page Not Found</h2>
    <h2 className=' text-xl'>return to  <Link className='text-myColor-400' to="/"><i className="fa-solid fa-house"></i> home</Link> </h2>
    </div>
    </>
  )
}
