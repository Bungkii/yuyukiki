import React, { useState, useRef } from "react";
// ดึงไฟล์เพลงจากโฟลเดอร์ music ที่เราเพิ่งสร้าง
import myMusic from "../../assets/music/song.mp3"; 

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* ซ่อนตัวเล่นเพลงของเบราว์เซอร์ไว้หลังบ้าน */}
      <audio ref={audioRef} src={myMusic} loop />
      
      {/* สร้างปุ่มลอยสีชมพู มุมขวาล่าง */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 bg-pink-400 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl z-50 hover:scale-110 hover:bg-pink-500 transition-all"
        style={{ boxShadow: '0 4px 15px rgba(244, 114, 182, 0.5)' }}
      >
        {isPlaying ? "⏸️" : "🎵"}
      </button>
    </>
  );
};

export default MusicPlayer;
