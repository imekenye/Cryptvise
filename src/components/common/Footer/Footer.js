import React from 'react';

function Footer() {
  return (
    <footer className="h-[300px] px-[56px] py-[10%] bg-text-color1 text-white relative w-full bottom-0 left-0">
      <div className="absolute flex justify-between w-full space-x-4">
        <div className=" logo">
          {' '}
          <img src="/logo.svg" alt="" />
          <p>Your Trusted Crypto Bank</p>
        </div>
        <div className="flex justify-between flex-1 footer__details text-[12px] ">
          <div className="contact">
            <h6>Contact</h6>
            <p>
              SG:+6531385455 <br /> US:+1(650) 516-7833
            </p>
            <p>
              SG:+6531385455 <br /> US:+1(650) 516-7833
            </p>
          </div>
          <div className="pages">
            <h6>Pages</h6>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="links">
            <h6>Pages</h6>
            <ul>
              <li>About Us</li>
              <li>Privacy policy</li>
              <li>Disclaimer</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
