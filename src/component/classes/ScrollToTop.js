import React, { useState } from 'react'

export const ScrollToTop = () => {
    const [show,setShow] = useState(false)
    const scroll ={
        width:'60px',
        height:'60px',
        backgroundColor:"#ee9922",
        position:'fixed',
        bottom: '30px',
        right:'40px',
        borderRadius:'50%',
        padding:'15px 10px',
        textAlign:'center',
        fontWeight:'bold'
    }

    const goTop = ()=>{
        window.scrollTo(0,0)
        
    }
    window.onscroll = ()=>{
        document.documentElement.scrollTop > 800 ? setShow(true) :setShow(false)        
    }
  return ( 
    <>
        {
             show && <div className='btn ' onClick={goTop} style={scroll}>Top</div>
        }
    </>
    
  )
}
