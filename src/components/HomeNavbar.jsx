/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiFillSetting, AiOutlineLeft } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './HomeNavbar.css';

function HomeNavbar() {
  return (
    <header>
      <div>
        <AiOutlineLeft className="hidden" />
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

export default HomeNavbar;
