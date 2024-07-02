"use client";
import { useState } from "react";
import VideoModal from "./video-model";

const VideoButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handlePlayButtonClick = () => {
    setVideoSrc("./embed/video.html");
    setShowModal(true);
  };

  return (
    <>
      <button
        aria-label="Play"
        type="button"
        className="btn-play"
        onClick={handlePlayButtonClick}
      >
        <span></span>
      </button>
      <VideoModal
        show={showModal}
        onClose={() => setShowModal(false)}
        videoSrc={videoSrc}
      />
    </>
  );
};

export default VideoButton;
