/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiFillSetting, AiOutlineLeft } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './HomeNavbar.css';

function PageNavbar() {
  return (
    <header>
      <div>
        <AiOutlineLeft />
      </div>
      <div>
        <span>City Bikes</span>
      </div>
      <div className="icons">
        <AiFillSetting />
        <GiHamburgerMenu />
      </div>
    </header>
  );
}

export default PageNavbar;
