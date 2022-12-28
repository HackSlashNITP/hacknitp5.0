import React from 'react'
import Image from "next/image"
import image from "../public/judges/Kaustubh.jpeg"
import image1 from "../public/judges/Shreya.jpeg"
import style from "../styles/organisers.module.css"
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";


const Organizers = () => {
  return (
    <div class="grid grid-cols-8 md:grid-cols-3 lg:grid-cols-6 sm:grid-col-2">
      
       <div className='m-4 '>
  {/* container */}
   <div className={style.container} >
   <Image src={image}  className=" block border-2 rounded-full w-58 hover:scale-150 transition duration-300 ease-in-out hover:opacity-50" id='pic' />
   {/* overlay */}
   {/* absolute left-7 top-1/3 */}
   <div className={style.overlay}>
     {/* content */}
    <div className={style.content}> hello</div>
    </div>
  </div>

  <figcaption className="text-xs text-yellow-900" style={{fontSize: "1rem"}}>Rahul <a className='text-[#4ade80] hover:scale-150'
            href="https://www.linkedin.com/company/hackslash"
            target="_blank"
            rel="noreferrer noopener"
          > 
              <AiFillLinkedin /> <AiFillTwitterCircle />
          </a></figcaption>
   <figcaption className="p-0 m-0 text-[#4ade80]" style={{fontSize: "0.8rem"}}>Event management lead</figcaption>
  </div> 
  <div className='m-4 '>
  {/* container */}
   <div className={style.container} >
   <Image src={image}  className=" block border-2 rounded-full w-58 hover:scale-150 transition duration-300 ease-in-out hover:opacity-50" id='pic' />
   {/* overlay */}
   {/* absolute left-7 top-1/3 */}
   <div className={style.overlay}>
     {/* content */}
    <div className={style.content}> hello</div>
    </div>
  </div>

  <figcaption className="text-xs text-yellow-900" style={{fontSize: "1rem"}}>Rahul <a className='text-[#4ade80] hover:scale-150'
            href="https://www.linkedin.com/company/hackslash"
            target="_blank"
            rel="noreferrer noopener"
          > 
              <AiFillLinkedin /> <AiFillTwitterCircle />
          </a></figcaption>
   <figcaption className="p-0 m-0 text-[#4ade80]" style={{fontSize: "0.8rem"}}>Event management lead</figcaption>
  </div> 
  <div className='m-4 '>
  {/* container */}
   <div className={style.container} >
   <Image src={image}  className=" block border-2 rounded-full w-58 hover:scale-150 transition duration-300 ease-in-out hover:opacity-50" id='pic' />
   {/* overlay */}
   {/* absolute left-7 top-1/3 */}
   <div className={style.overlay}>
     {/* content */}
    <div className={style.content}> hello</div>
    </div>
  </div>

  <figcaption className="text-xs text-yellow-900" style={{fontSize: "1rem"}}>Rahul<a className='text-[#4ade80] hover:scale-150'
            href="https://www.linkedin.com/company/hackslash"
            target="_blank"
            rel="noreferrer noopener"
          > 
              <AiFillLinkedin /> <AiFillTwitterCircle />
          </a></figcaption>
   <figcaption className="p-0 m-0 text-[#4ade80]" style={{fontSize: "0.8rem"}}>Event management lead</figcaption>
  </div> 

       {/* <div className='m-4 '>
        <Image src={image}  className="border-2 rounded-full w-58 hover:bg-[#d4d4d8] hover:scale-150 transition duration-300 ease-in-out hover:opacity-50" />
        <figcaption className="text-xs text-yellow-900" style={{fontSize: "1rem"}}>Rahul</figcaption>
        <figcaption className="p-0 m-0 text-[#4ade80]" style={{fontSize: "0.8rem"}}>Event management lead</figcaption>
       </div>

  */}
       
       
  </div> 
  )
}

export default Organizers
