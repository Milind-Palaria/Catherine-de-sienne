


"use client";
import Image from 'next/image'
import React from 'react'


const MainHero = () => {
    return (
        <section>
            <div className='flex flex-col h-screen bg-transparent justify-center items-center text-[10rem] w-full overflow-y-hidden tracking-[0.3rem] text-white bg-gradient-to-t from-black-50 to-black-20' style={{ fontFamily: 'HelmswaldPost, sans-serif' }}>
            
                <Image
                    src="/images/castle1.jpg" // Path to your image in the public directory
                    alt="Castle Image"
                     width={1920}// Desired width of the image
                     height={1280}// Desired height of the image
                    quality={100} // Quality of the image (1-100)
                    // layout='fill'  
                    className='z-[-2]'                  
                />
                {/* <div className='w-[50%] h-screen absolute right-0 bg-white z-1 opacity-50'>
                    
                </div> */}
               {/*                    
               <div className='absolute top-0 text-center w-full '>

                 <div>
                    <h1>Catherine</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='bg-black-80'>De</h1>
                    <h1>Sienne</h1>
                </div>
                <p className='text-[2rem]'>A merchant bank</p>
            </div> */}


</div>
        </section>
    )
}

export default MainHero





// "use client";
// import Image from 'next/image'
// import React from 'react'


// const MainHero = () => {
//     return (
//         <section>
//             <div className='flex flex-col h-screen bg-transparent justify-center items-center text-[10rem] w-full overflow-y-hidden tracking-[0.3rem] text-white bg-gradient-to-t from-black-50 to-black-20' style={{ fontFamily: 'HelmswaldPost, sans-serif' }}>
            
//                 <Image
//                     src="/images/mainhero_castle.png" // Path to your image in the public directory
//                     alt="Castle Image"
//                     //  width={1920}// Desired width of the image
//                     //  height={1280}// Desired height of the image
//                     quality={100} // Quality of the image (1-100)
//                     // layout='fill'
//                     layout='fill'
//                     className='absolute top-[-23%] z-[-4]'
//                 />
//                  <div className=' opacity-80 z-[2]'>
//                     <h1>Catherine</h1>
//                 </div>
//                 {/* <Image
//                     src="/images/mainhero_castle.png" // Path to your image in the public directory
//                     alt="Castle Image"
//                    width={1920}// Desired width of the image
//                      height={1280}// Desired height of the image
//                     quality={100} // Quality of the image (1-100)
//                     // layout='fill'
//                     className='absolute top-[-23%] z-[3]'
//                 /> */}
                   

//                 <div className='flex flex-col items-center justify-center z-[10]  opacity-80'>
//                     <h1>De</h1>
//                     <h1>Sienne</h1>
//                 </div>
//                 <p className='text-[2rem]'>A merchant bank</p>
//             </div>



//             {/* <div className=' text-white'>
//         Catherine De Sienna
//     </div>
//     <div className='absolute top-0 w-full h-screen bg-white'>
    
    
// </div> */}

//         </section>
//     )
// }

// export default MainHero