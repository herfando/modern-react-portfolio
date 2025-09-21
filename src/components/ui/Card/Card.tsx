// src/ui/Card/Card.tsx
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div
      className={`p-[1px] bg-gradient-to-br from-[#ff6c37] to-[#dedcdc] rounded-[18px] relative ${className}`}
    >
      <div className="h-full bg-[#fafafa] dark:bg-[#0A0D12] rounded-2xl relative">
        {/* Ikon kutipan diposisikan secara absolut di sini */}
        <div className="absolute top-[-30px] left-10 w-[46px] max-[393px]:top-[-30px] max-[393px]:left-5">
          <img src="./Vector.png" alt="Quote Icon" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;