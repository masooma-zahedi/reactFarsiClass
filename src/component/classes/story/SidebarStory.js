import React from 'react';
import {contentListStory } from "./dataStory"

export const SidebarStory = () => {  
  
  return (
    <>
    <div className=' mt-4 f-right shadow-lg' style={{position:'sticky',top:"10px"}}>
      <div className="sidebar border-end">
        <div className="sidebar-header border-bottom">
          <div className="sidebar-brand text-secondary h4">فهرست مطالب</div>
        </div>
        <ul className="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link active h6 text-success" href="#">
              گروه داستان
            </a>
          </li>
          <li className="nav-item d-grid  ">
            <button type="button" className="border-0 text-success h6 nav-link" data-bs-toggle="modal" data-bs-target={`#${contentListStory.newword.idModal}`}>
              داستان 
            </button>
          </li>
        </ul>
        <div className="sidebar-footer border-top d-flex">
          <button className="sidebar-toggler" type="button"></button>
        </div>
      </div>
    </div>
    {/* modal */}
    <div className="modal fade" id={`${contentListStory.newword.idModal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog biger-modal ">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">لیست مطالب</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='d-flex flex-wrap'>
        {contentListStory.newword.infoWords.map((item,index)=>{
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