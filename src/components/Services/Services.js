import React from 'react';
import { LeftArrow, RightArrow, ServiceIcon } from '../Icons';
import Ai from '../Icons/Ai';
import Atm from '../Icons/Atm';
import BlobSvg from '../Icons/Blob';
import Wallet from '../Icons/Wallet';

function Services() {
  return (
    <div className="relative h-full">
      <div className="absolute z-10 flex flex-col justify-center items-center bg-[#ECECEC] m-auto w-full py-[20%] ">
        <div className="flex items-center justify-center space-x-4 icons">
          <div className="left__arrow">
            <LeftArrow />
          </div>
          <div className="flex space-x-4 icons__main">
            <ServiceIcon icon={<Ai />} color text={'Ai'} />
            <ServiceIcon icon={<Wallet />} text={'Wallet'} />
            <ServiceIcon icon={<Atm />} color text={'Atm'} />
          </div>
          <div className="right__arrow">
            <RightArrow />
          </div>
        </div>
        <div className="blob mt-7">
          <BlobSvg />
        </div>
      </div>
    </div>
  );
}

export default Services;
