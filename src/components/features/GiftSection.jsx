import React from "react";
import { _giftAlbums } from "../../assets/mock/mock";

const GiftSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      
      <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6">
        🤑
      </h2>

      {/* วนลูปแสดงรูปภาพทั้งหมด */}
      <div className="flex flex-col items-center gap-6 w-full px-4">
        {_giftAlbums.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gift ${index + 1}`}
            className="w-full max-w-sm rounded-xl shadow-md object-cover"
          />
        ))}
      </div>

    </div>
  );
};

export default GiftSection;
