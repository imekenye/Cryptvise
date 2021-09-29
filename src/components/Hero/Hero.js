import React from 'react';

function Hero() {
  return (
    <div className="relative  h-screen text-center py-[10%]">
      <div className="absolute z-20 w-full">
        <div className="font-light hero__display">
          <h1 className="text-[64px] text-white">Cryptvise</h1>
          <span className="text-[64px] text-text-color1">
            New Finance Ecosystem
          </span>
        </div>
        <p className="hero__text w-[470px] text-text-color1 m-auto mt-[5%]">
          <span className="p-[2px] font-bold text-white bg-text-color1">
            Cryptvise
          </span>{' '}
          is the world’s first self-sufficient ecosystem to combine and provide
          all types of banking services involving fiat and cryptocurrencies on
          one secure platform. Through our technology and resources, we assist
          exchanges in maintaining their liquidity along with a wide range of
          banking products.
        </p>
      </div>
    </div>
  );
}

export default Hero;
