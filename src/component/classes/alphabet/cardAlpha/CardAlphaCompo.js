import React from 'react';
import {infoCard} from './cardDataAlpha';
import { nanoid } from 'nanoid';

const pastelColors = [
  "linear-gradient(135deg, #FFDEE9, #B5FFFC)", // صورتی/آبی روشن
  "linear-gradient(135deg, #FFF6B7, #F6416C)", // زرد/قرمز ملایم
  "linear-gradient(135deg, #cdf7a6ff, #F8D800)", // طلایی ملایم
  "linear-gradient(135deg, #D4FC79, #96E6A1)", // سبز روشن
  "linear-gradient(135deg, #84FAB0, #8FD3F4)", // سبز/آبی
  "linear-gradient(135deg, #FCCF31, #F55555)", // نارنجی روشن
  "linear-gradient(135deg, #FBC2EB, #A6C1EE)", // صورتی/بنفش روشن
  "linear-gradient(135deg, #fbe5c2ff, #eea6baff)", // صورتی/بنفش روشن
];

export const CardAlphaCompo = () => {
  return (
    <>
      <style>
    {`
      .letter-card {
        border-radius: 20px;
        overflow: hidden;
        transition: transform 0.3s ease-in-out;
        background: linear-gradient(135deg, #ffecd2, #fcb69f);
      }

      .letter-card:hover {
        transform: scale(1.05);
      }

      .letter-img {
        height: 250px;
        object-fit: contain;
        padding: 15px;
        background: white;
      }
    `}
  </style>

  {/* <div className="letter-card">
    <img src={letter.mainPic} className="letter-img" alt="" />
  </div> */}

    <section className="f-right mt-5" dir="rtl">
      <div className="row justify-content-center">
        {infoCard.map((letter, index) =>{
            // انتخاب رنگ تصادفی برای هر کارت
            const bgColor =
              pastelColors[Math.floor(Math.random() * pastelColors.length)];
           return (
          <div className="col-12 col-md-4 col-lg-3 mb-4" key={index + nanoid(4)}>
            <div className="card letter-card shadow-lg" style={{ background: bgColor }}>
              <img
                src={letter.mainPic}
                className="card-img-top letter-img"
                data-bs-toggle="modal"
                data-bs-target={`#${letter.examplePicId}`}
                alt={letter.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{letter.title}</h5>
                <p className="card-text">با صداهای کوتاه و کشیده 🎵</p>
                <div className="d-flex justify-content-around">
                  <button
                    className="btn btn-success rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target={`#${letter.shortSoundId}`}
                  >
                    🎶 کوتاه
                  </button>
                  <button
                    className="btn btn-warning rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target={`#${letter.longSoundId}`}
                  >
                    🎵 کشیده
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Example */}
            <div
              className="modal fade"
              id={letter.examplePicId}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content colorful-modal">
                  <div className="modal-header">
                    <h5 className="modal-title button" data-bs-dismiss="modal" aria-label="Close">نمونه‌های {letter.title}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {letter.examplePic.map((exaPic, i) => (
                      <div key={i + nanoid(4)} className="mb-3">
                        <img src={exaPic} className="w-100 rounded" alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Short */}
            <div
              className="modal fade"
              id={letter.shortSoundId}
              data-bs-backdrop="static"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content colorful-modal">
                  <div className="modal-header">
                    <h5 className="modal-title button" data-bs-dismiss="modal" aria-label="Close">صدای کوتاه 🎶</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <img
                      src={letter.shortSoundPic}
                      className="w-75 rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Long */}
            <div
              className="modal fade"
              id={letter.longSoundId}
              data-bs-backdrop="static"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content colorful-modal">
                  <div className="modal-header">
                    <h5 className="modal-title button" data-bs-dismiss="modal" aria-label="Close">صدای کشیده 🎵</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <img
                      src={letter.longSoundPic}
                      className="w-75 rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>

    </section>
    </>
  );
};

