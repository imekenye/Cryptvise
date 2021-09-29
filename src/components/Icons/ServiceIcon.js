import React from 'react';
import Ai from './Ai';

function ServiceIcon({ color, icon, text }) {
  return (
    <div>
      <div
        className=" flex justify-center items-center w-[100px] h-[100px] rounded-full"
        style={{
          backgroundColor: color ? 'white' : '#397090',
          boxShadow: `0px 19px 4px 2px rgba(0, 0, 0, 0.1)`,
        }}
      >
        {icon}
      </div>
      <h6 className="text-center">{text}</h6>
    </div>
  );
}

export default ServiceIcon;
