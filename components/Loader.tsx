import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(useGSAP);

const Loader = () => {
    useEffect(() => {
        blinker();
        // const count = setInterval(() => {
        //   setCounter((counter) =>
        //     counter < 100
        //       ? counter + 4
        //       : (clearInterval(count), setCounter(100), reveal())
        //   );
        // }, 125);
      }, []);
    const blinker = () => {
        const t2 = gsap.timeline({
          onComplete: () => {
            console.log("completed");
          },
        });
        t2.to("#para", {
          opacity: 0, duration: 0.75, ease: Expo.easeInOut
        }).to("#para", {
          opacity: 0.75, duration: 0.75, ease: Expo.easeInOut
        }).to("#para", {
          opacity: 0, duration: 0.75, ease: Expo.easeInOut
        }).to("#para", {
          opacity: 0.75, duration: 0.75, ease: Expo.easeInOut
        }).to("#para", {
          opacity: 0, duration: 0.75, ease: Expo.easeInOut, filter: "blur(20px)"
        })
      }

    return (
        <div> <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    border: '4px solid rgba(0, 0, 0, 0.1)',
                    borderLeftColor: '#000',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    animation: 'spin 1s linear infinite',
                }}
            />
            <div className="loader"></div>
            <h1 id='para' className='loader-text'>Loading...</h1>
            <style jsx>{`
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
        .loader-text{
        font-size:10vh;
        color:white;
        }
        .loader {
            width: 0;
            height: 4px;
            background-color: #fff;
            animation: expand 3s forwards;
            position: relative;
        }

        .loader::before,
        .loader::after {
            content: '';
            position: absolute;
            top: 0;
            height: 4px;
            background-color: #fff;
        }

        .loader::before {
            left: 50%;
            animation: expand-left 3s forwards;
        }

        .loader::after {
            right: 50%;
            animation: expand-right 3s forwards;
        }

        @keyframes expand-left {
            0% { width: 0; }
            100% { left: 0; width: 50%; }
        }

        @keyframes expand-right {
            0% { width: 0; }
            100% { right: 0; width: 50%; }
        }
    `}</style>
        </div></div>
    )
}

export default Loader
// const Loader = () => {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
//         <div className="loader"></div>
//         <style jsx>{`
//           .loader {
//             border: 4px solid rgba(0, 0, 0, 0.1);
//             border-top: 4px solid #3498db;
//             border-radius: 50%;
//             width: 40px;
//             height: 40px;
//             animation: spin 1s linear infinite;
//           }
//           @keyframes spin {
//             0% {
//               transform: rotate(0deg);
//             }
//             100% {
//               transform: rotate(360deg);
//             }
//           }
//         `}</style>
//       </div>
//     );
//   };
  
//   export default Loader;
  