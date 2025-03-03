import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChangeBg } from './classes/ChangeBg';

export const Header = () => {
  const [showbg,setShowbg] = useState(false);
  const handlebg = ()=>{
    setShowbg(true)
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid ">
                <NavLink className="navbar-brand" to="/">FarsiLearn</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Alphabet</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/word/verbs-1">Word</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/story/floraN1">Story</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" onClick={handlebg} to="">ChangeBg</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        {showbg && <ChangeBg/>}
        {/* <ChangeBg/> */}
    </>
  )
}
