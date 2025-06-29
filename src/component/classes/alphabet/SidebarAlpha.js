
import React, { useState } from 'react';
import {contentListAlpha } from "./dataAlpha"
import { NavLink, Link } from 'react-router-dom';

export const SidebarAlpha = ({setShowShort,idCarouselAlpha}) => { 
  const Modal = ({id,data})=>{
    return(<>
      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog biger-modal ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">لیست مطالب</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='d-flex flex-wrap'>
              {data.map((item,index)=>{                
                  return(
                    <>
                      <NavLink key={item.id} className="nav-link p-3 shadow-sm m-2 text-success" to={`/${item.targetHref}`}>{item.title}</NavLink>
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
    </>)
  };
   
  return (
    <>
    <div className=' mt-4 f-right shadow-lg' style={{position:'sticky',top:"10px"}}>
      <div className="sidebar border-end">
        <div className="sidebar-header border-bottom">
          <div className="sidebar-brand text-secondary h4">فهرست مطالب</div>
        </div>
        <ul className="sidebar-nav">
          <li className="nav-item">
            <a onClick={()=>{setShowShort(false)}} className="nav-link active h6 text-success" href="#">
              گروه الفبا
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-success h6" to="/">کارت الفبا</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-success h6" to="CarouselAlphaExp/shortSound">صداهای کوتاه</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-success h6" to="CarouselAlphaExp/longSound">صداهای بلند</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-success h6" to="SyllableApp">بخش های کلمات</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-success h6" to="wordGameWithCategories">کارت کلمات</NavLink>
          </li>

          <li className="nav-item d-grid  ">
            <button type="button" className="border-0 text-success h6 nav-link" data-bs-toggle="modal" data-bs-target={`#${contentListAlpha.readTogether.idModal}`}>
             با هم بخوانیم 
            </button>
          </li>
          <li className="nav-item d-grid  ">
            <button type="button" className="border-0 text-success h6 nav-link" data-bs-toggle="modal" data-bs-target={`#${contentListAlpha.storyAlpha.idModal}`}>
             داستان الفبا
            </button>
          </li>

          <li className="nav-item d-grid  ">
            <button type="button" className="border-0 text-success h6 nav-link" data-bs-toggle="modal" data-bs-target={`#${contentListAlpha.brokenWords.idModal}`}>
             جدول کلمات 
            </button>
          </li>
          <li className="nav-item d-grid  ">
            <button type="button" className="border-0 text-success h6 nav-link" data-bs-toggle="modal" data-bs-target={`#${contentListAlpha.gameTable.idModal}`}>
             بازی جدول 
            </button>
          </li>
          <li className="nav-item d-grid  ">
          <button type="button" className="border-0 text-success h6 nav-link" data-bs-toggle="modal" data-bs-target={`#${contentListAlpha.newword.idModal}`}>
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

    <Modal id={`${contentListAlpha.newword.idModal}`} data={contentListAlpha.newword.infoWords}/>
    <Modal id={`${contentListAlpha.readTogether.idModal}`} data={contentListAlpha.readTogether.infoWords}/>
    <Modal id={`${contentListAlpha.brokenWords.idModal}`} data={contentListAlpha.brokenWords.infoWords}/>
    <Modal id={`${contentListAlpha.gameTable.idModal}`} data={contentListAlpha.gameTable.infoWords}/>
    <Modal id={`${contentListAlpha.storyAlpha.idModal}`} data={contentListAlpha.storyAlpha.infoWords}/>
 





    {/* <div className="modal fade" id={`${contentListAlpha.newword.idModal}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog biger-modal ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">لیست مطالب</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='d-flex flex-wrap'>
            {contentListAlpha.newword.infoWords.map((item,index)=>{
                return(
                  <>
                    <NavLink key={index} className="nav-link p-3 shadow-sm m-2 text-success" to={`/${item.targetHref}`}>{item.title}</NavLink>
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
  </div> */}
</>
  )
}
