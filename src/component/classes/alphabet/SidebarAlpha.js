
import React from 'react'

export const SidebarAlpha = () => {
  const stickside =  document.documentElement.scrollTop == 500 ?"sticky" : "";
  return (
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
          <li className="nav-item">
            <a className="nav-link" href="#read1">
              <i className="nav-icon cil-speedometer"></i> با هم بخوانیم
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#meaning1">
              <i className="nav-icon cil-speedometer"></i> معنی لغات تازه
            </a>
          </li>
        </ul>
        <div className="sidebar-footer border-top d-flex">
          <button className="sidebar-toggler" type="button"></button>
        </div>
      </div>
    </div>
  )
}
