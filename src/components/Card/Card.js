import React from 'react';

function Card({ icon, text, title }) {
  return (
    <div className="relative h-[400px] w-[368px] p-[50px] bg-white border-b-8 border-text-color1">
      <div className="absolute rounded-full flex justify-center items-center card__icon right-2 top-[-50px] bg-text-color1 w-[100px] h-[100px]">
        {icon}
      </div>
      <h2 className="card__title text-[36px] text-text-color2">{title}</h2>
      <p className="card__desc text-text-color1">{text}</p>
    </div>
  );
}

export default Card;
