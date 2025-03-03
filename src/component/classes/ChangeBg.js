import React, { useEffect, useState } from 'react';

    
export const ChangeBg = () => {
    const [show,setShow]= useState(false);
    const [textbutton, setTextbutton] = useState('bg')
    const backgroundCir=['rgba(182, 118, 185, 0.25)','rgb(212, 180, 153)','rgba(235, 175, 180, 0.53)','rgba(119, 187, 107, 0.35)','rgba(157, 165, 221, 0.43)'];
    const [background, setBackground]= useState(backgroundCir);
    useEffect(()=>{
        setBackground([...background,'rgba(153, 147, 35, 0.47)','rgba(215, 167, 112, 0.49)'])
    },[])
    // setBackground([...background,"#888"])
    

    const handlebg = (e)=>{
        const myBg = e.target.style.cssText;
        console.log(myBg);
        console.log(e.target.parentElement.parentElement.parentElement);
        e.target.parentElement.parentElement.parentElement.style=myBg;
        
        
        // document.querySelector(`#${id}`).style = myBg; 
    }
    const changeBg = ()=>{
        setShow(true);
        setTextbutton("hide bg")  
    }
    const hideBg = ()=>{
        setShow(false);
        setTextbutton("")
    }
  return (
    <>
                <div id='' className="d-inline-block">
                    <div className='d-flex'>
                    <button className='btn btn-warning p-0 text-danger' onClick={textbutton == 'bg' ? changeBg : hideBg}>{textbutton}</button>
                    {show && 
                    background.map((circle,index)=>{
                        return(
                            <>
                                <span onClick={handlebg} className="bgcolor " style={{backgroundColor:`${circle}`}} ></span>

                            </>
                        )
                    })
                }
                </div>
                </div>
    </>
  )
}
