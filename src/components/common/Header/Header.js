import React from 'react';

function Header() {
  return (
    <nav className=" mx-[56px] border-b border-white h-[72px] flex items-center justify-between ">
      <div className="logo">
        <img src="/logo.svg" alt="" />
      </div>
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
