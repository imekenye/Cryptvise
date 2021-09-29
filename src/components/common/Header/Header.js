import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <nav
      layoutId="navborder"
      className=" mx-[56px] border-b border-white h-[72px] flex items-center justify-between "
    >
      <motion.div layoutId="logo" className="logo">
        <motion.img src="/logo.svg" alt="" />
      </motion.div>
      <ul className="flex items-center space-x-4 text-white">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>
      <button className="bg-white py-[12px] px-[24px] text-text-color1">
        Contact us
      </button>
    </nav>
  );
}

export default Header;
