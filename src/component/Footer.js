import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-success text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 text-center px-4">
            <h5>در باره ما</h5>
            <p className='text-center'>کلاس فارسی آنلاین ما با آموزش تعاملی و باکیفیت، یادگیری زبان فارسی را برای همه ساده و لذت‌بخش می‌کند </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white" to={'/'} >Alphabet</Link></li>
              <li><Link className="text-white" to={'/word'} >Word</Link></li>
              <li><Link className="text-white" to={'/story'} >Story</Link></li>
              <li><Link className="text-white" to={'/'} >Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white" to={'https://www.instagram.com/masooma_farsi_learn/'} >Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Masooma-learnFarsi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

