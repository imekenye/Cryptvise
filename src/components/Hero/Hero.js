import React from 'react';
import AnimatedWave from '../AnimatedWave/AnimatedWave';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative  h-screen text-center py-[10%]">
      <div className="absolute left-0 w-full -bottom-0">
        <AnimatedWave />
      </div>
      <div className="absolute left-0 w-full -bottom-2">
        <AnimatedWave />
      </div>
      <div className="absolute left-0 w-full -bottom-4">
        <AnimatedWave />
      </div>
      <div className="absolute left-0 w-full -bottom-8">
        <AnimatedWave />
      </div>
      <div className="absolute z-30 w-full">
        <div className="font-light hero__display">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { damping: 20, delay: 5 },
            }}
            transition={{ delay: 6 }}
            className="text-[64px] text-white"
          >
            Cryptvise
          </motion.h1>
          <motion.span
            initial={{ y: 200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { damping: 20, delay: 5 },
            }}
            transition={{ delay: 5 }}
            className="text-[64px] text-text-color1"
          >
            New Finance Ecosystem
          </motion.span>
        </div>
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { damping: 20, delay: 5 } }}
          transition={{ delay: 5 }}
          className="hero__text w-[470px] text-text-color1 m-auto mt-[5%]"
        >
          <span className="p-[2px] font-bold text-white bg-text-color1">
            Cryptvise
          </span>{' '}
          is the world’s first self-sufficient ecosystem to combine and provide
          all types of banking services involving fiat and cryptocurrencies on
          one secure platform. Through our technology and resources, we assist
          exchanges in maintaining their liquidity along with a wide range of
          banking products.
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;
