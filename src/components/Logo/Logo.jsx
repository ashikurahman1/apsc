import React from 'react';
import APSC_LOGO from '../../assets/apsc-logo.jpg';
const Logo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3">
      <img
        src={APSC_LOGO}
        alt="Agrabad Public School & College Logo"
        className="w-15 lg:w-20"
      />
      <div className="text-center lg:text-left">
        <p className="text-sm">ESTD: 1998</p>
        <h2 className="font-semibold text-xl lg:text-3xl">
          Agrabad Public School & College
        </h2>
        <p className="text-sm">CDA R/A, Agrabad, Chattogram. </p>
      </div>
    </div>
  );
};

export default Logo;
