
import React from 'react';
import {contentListAlpha } from "./dataAlpha"

export const SidebarAlpha = () => {  
  
  return (
    <>
    <div className=' mt-4 f-right shadow-lg' style={{position:'sticky',top:"10px"}}>
      <div className="sidebar border-end">
        <div className="sidebar-header border-bottom">
          <div className="sidebar-brand text-success h4">فهرست مطالب</div>
        </div>
        <ul className="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="nav-icon cil-speedometer"></i> گروه الفبا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="nav-icon cil-speedometer"></i> حروف الفبا
            </a>
          </li>
          <li className="nav-item d-grid  ">
            <button type="button" className="border-0 text-success h5   nav-link" data-bs-toggle="modal" data-bs-target={`#${contentListAlpha.newword.idModal}`}>
             معنی لغات تازه 
            </button>
          </li>
        </ul>
        <div className="sidebar-footer border-top d-flex">
          <button className="sidebar-toggler" type="button"></button>
        </div>
      </div>
    </div>
    {/* modal */}
    <div className="modal fade" id={`${contentListAlpha.newword.idModal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='d-flex flex-wrap'>
        {contentListAlpha.newword.infoWords.map((item,index)=>{
            return(
              <>
                <a key={index} className='p-3 shadow-sm m-2' href={`#${item.targetHref}`}><button className='border-0 text-success bg-transparent'>{item.title}</button></a>

              </>
            )
        })}
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
