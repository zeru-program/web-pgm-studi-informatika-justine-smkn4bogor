import React, { useState, useEffect } from 'react'

const Splash = () => {
    const [dispAn, setDispAn] = useState(true)
    const [opacity, setOpacity] = useState(false)
    const [none, setNone] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDispAn(false)
        }, 2800)
        setTimeout(() => {
            setOpacity(true)
        }, 6000)
        setTimeout(() => {
            setNone(true)
        }, 7500)
    }, [])
  return (
    <div className='w-100 vh-100 position-fixed start-0 top-0 justify-content-center align-items-center' style={{display: none ? "none" : "flex",backdropFilter: "blur(2px)", zIndex: "999999999", background: opacity ? "rgba(225,225,225,.5)" : "rgba(225,225,225,1)"}}>
       <span class="loader" style={{display: !dispAn ? "flex" : "none"}}></span>
       <img src="/FTS.png" style={{display: dispAn ? "flex" : "none"}} className='animate-img-splash' alt="" />
    </div>
  )
}

export default Splash