import React from 'react'

export const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">FarsiLearn</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./classes/alphabet">Alphabet</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">word</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">story</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
