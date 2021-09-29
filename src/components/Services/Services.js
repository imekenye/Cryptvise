import React from 'react';
import { LeftArrow, RightArrow, ServiceIcon } from '../Icons';
import Ai from '../Icons/Ai';
import Atm from '../Icons/Atm';
import BlobSvg from '../Icons/Blob';
import Wallet from '../Icons/Wallet';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import AnimatedWave from '../AnimatedWave';

function Services() {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        damping: 20,
      },
    });
  }
  return (
    <div className="relative h-screen  services  bg-[#ECECEC]">
      <div className="absolute left-0 z-20 w-full -bottom-0">
        <AnimatedWave upsidedown />
      </div>
      <div className="absolute left-0 z-20 w-full -bottom-2">
        <AnimatedWave upsidedown />
      </div>
      <div className="absolute left-0 z-20 w-full -bottom-4">
        <AnimatedWave upsidedown />
      </div>
      <div className="absolute left-0 z-20 w-full -bottom-8">
        <AnimatedWave upsidedown />
      </div>
      <div
        ref={ref}
        className="absolute z-20 flex flex-col justify-center items-center m-auto w-full py-[10%] "
      >
        <motion.div
          initial={{
            y: '100vh',
            opacity: 0,
          }}
          animate={animationControl}
          className="flex items-center justify-center space-x-4 icons"
        >
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
        </motion.div>
        <div className="blob mt-7">
          <BlobSvg />
        </div>
      </div>
    </div>
  );
}

export default Services;
