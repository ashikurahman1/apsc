import React, { useState } from 'react';
import {
  FaAngleDown,
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaX,
  FaYoutube,
} from 'react-icons/fa6';
import Logo from '../components/Logo/Logo';
import { NavLink } from 'react-router';
import Marquee from 'react-fast-marquee';

const navLink = (
  <>
    <li className="">
      <NavLink to="/">Home </NavLink>
    </li>
    <li className="">
      <NavLink to="/about" className={'flex items-center gap-1'}>
        About <FaAngleDown />{' '}
      </NavLink>
    </li>
    <li className="">
      <NavLink to="/information" className={'flex items-center gap-1'}>
        Information <FaAngleDown />{' '}
      </NavLink>
    </li>
    <li className="">
      <NavLink to="/admission" className={'flex items-center gap-1'}>
        Admission <FaAngleDown />{' '}
      </NavLink>
    </li>
    <li className="">
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header>
      {/* top header */}
      <section className="bg-neutral-900 text-neutral-100 space-x-6 p-2 sticky top-0 left-0 z-111">
        <div className="flex  flex-col items-center gap-3 lg:flex-row justify-between w-full lg:w-10/12 px-4 mx-auto text-sm">
          <div className="flex gap-3">
            <p className="flex items-center gap-2">
              <span>
                <FaEnvelope />
              </span>
              principle@apsc.com
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaPhone />
              </span>
              01758-801605
            </p>
          </div>
          <div className="flex gap-5 items-center">
            {/* Social Icons */}
            <div className="flex gap-4">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaWhatsapp />
            </div>
            <div>
              <button className="btn btn-primary btn-sm">
                Online Admission
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* navigation */}
      <nav className="">
        {/* Logo */}
        <div className="w-full lg:w-10/12 p-3 mx-auto">
          <Logo />
        </div>
        {/* Mobile Menu */}
        <div className="absolute top-25 ml-3 lg:hidden">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="btn btn-primary"
          >
            <FaBars className="" size={22} />
          </button>
        </div>
        {mobileMenu && (
          <div
            className={`absolute ${
              mobileMenu
                ? 'top-0 left-0 duration-300 transition-all bg-primary/90 text-neutral-100 h-full w-full p-10 py-20 z-999'
                : '-top-100'
            }`}
          >
            <ul className="uppercase font-semibold space-y-5">{navLink}</ul>
            <button
              onClick={() => setMobileMenu(false)}
              className="absolute top-10 right-10 bg-red-500 p-3 rounded-md shadow-md focus:bg-primary"
            >
              <FaX size={25} />
            </button>
          </div>
        )}

        {/* Menus */}

        <div className="bg-primary text-sm">
          <ul className="uppercase font-semibold w-full lg:w-10/12 px-4 mx-auto  hidden lg:flex items-center gap-3 text-neutral-100 ">
            {navLink}
          </ul>
        </div>
      </nav>
      {/* Notice */}
      <div className="my-2 lg:w-10/12 mx-auto px-4">
        <div className="flex p-2">
          <h4 className="text-primary uppercase mr-4 font-bold">Notice</h4>
          <Marquee pauseOnHover={true} speed={60} className="space-x-4">
            <p className="mr-10"> দূর্গাপূজা 2025</p>
            <p className="mr-10"> প্রাক নির্বাচনী পরীক্ষা ২০২৫</p>
            <p className="mr-10"> অর্ধবার্ষিক পরীক্ষার সময়সূচী পরিবর্তন</p>
            <p className="mr-10">অর্ধ বার্ষিক পরীক্ষা সংক্রান্ত নোটিশ</p>
            <p className="mr-10">
              {' '}
              শ্রী শ্রী শ্যামা পূজার বন্ধ দূর্গাপূজা 2025{' '}
            </p>
            <p className="mr-10"> প্রাক নির্বাচনী পরীক্ষা ২০২৫ </p>
          </Marquee>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
