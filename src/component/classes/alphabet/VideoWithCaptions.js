import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoWithCaptions = ({ videoSrc, captionKey }) => {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");

  // 📌 تعریف همه زیرنویس‌ها داخل کامپوننت
  const allCaptions = {
    myvideo: [
      { start: 0, end: 3, text: "سلام! این اولین جمله است." },
      { start: 4, end: 7, text: "این یک ترجمه کوتاه است." },
      { start: 8, end: 12, text: "ادامه داستان..." },
    ],
    myvideo2: [
      { start: 0, end: 2, text: "این ویدیو دوم است." },
      { start: 3, end: 6, text: "با زیرنویس متفاوت!" },
    ],
    // می‌توانید هر تعداد ویدیو اضافه کنید
  };

  // انتخاب زیرنویس مناسب بر اساس captionKey
  const captions = allCaptions[captionKey] || [];

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const caption = captions.find(
        (c) => currentTime >= c.start && currentTime <= c.end
      );
      setCurrentCaption(caption ? caption.text : "");
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [captions]);

  return (
    <div className="container mt-4">
      <div className="position-relative" style={{ maxWidth: "700px", margin: "auto" }}>
        <video ref={videoRef} width="100%" controls className="rounded">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {currentCaption && (
          <div
            className="position-absolute w-100 text-center px-3 py-2 rounded"
            style={{
              bottom: "10%",
              left: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            {currentCaption}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoWithCaptions;
