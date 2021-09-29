import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function PreLoader() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-40 flex items-center justify-center w-full min-h-screen "
        style={preloaderStyle}
        exit={{ opacity: 0 }}
      >
        <div className="object-center mx-[56px] m-auto w-full">
          <motion.div layoutId="logo" className="logo">
            <motion.img src="/logo.svg" alt="" />
          </motion.div>
          <motion.div
            layoutId="navborder"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3 }}
            className="lower h-[2px] bg-white   mt-[10px]"
          ></motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PreLoader;

const preloaderStyle = {
  background: '#52DAEB',
};
