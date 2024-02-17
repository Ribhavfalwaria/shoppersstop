import React from 'react'
import { footerLinks } from '../constants'
 
const Footer = () => {
  return (
    <section
        className={`bg-dimGrey p-5 w-full flex flex-row justify-around mt-10 flex-wrap xs:w-29 object-contain`}
      >
       {
        footerLinks.map((footer,i)=>(<div key={i} className='flex flex-col mb-3'>
            <h1 className='font-poppins text-2xl font-medium'>{footer.title}</h1>
            <br />
            <div className='mt-3'>
                {
                    footer.links.map((link,i)=>(
                        <p  key={i}  className="font-poppins">
                            {link.name}
                        </p>
                    ))
                }
            </div>
 
        </div>
        ))
       }
 
 
      </section>
  )
}
 
export default Footer