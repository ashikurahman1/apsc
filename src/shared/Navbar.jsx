import React from 'react';
import {
  FaAngleDown,
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';
import Logo from '../components/Logo/Logo';
import { NavLink } from 'react-router';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
      {/* top header */}
      <section className="bg-neutral-900 text-neutral-100 space-x-6 p-2">
        <div className="flex flex-col items-center gap-3 lg:flex-row justify-between w-full lg:w-10/12 px-4 mx-auto text-sm">
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
              <button className="btn btn-primary btn-sm">Online Apply</button>
            </div>
          </div>
        </div>
      </section>
      {/* navigation */}
      <nav className="relative">
        {/* Logo */}
        <div className="w-full lg:w-10/12 p-3 mx-auto">
          <Logo />
        </div>
        {/* Mobile Menu */}
        <div className="absolute top-5 ml-3 lg:hidden">
          <button className="btn btn-primary">
            <FaBars className="" size={22} />
          </button>
        </div>
        {/* Menus */}

        <div className="bg-primary text-sm">
          <ul className="uppercase font-semibold w-full lg:w-10/12 px-4 mx-auto  hidden lg:flex items-center gap-3 text-neutral-100 ">
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
          </ul>
        </div>
      </nav>
      {/* Notice */}
      <div className="my-2 lg:w-10/12 mx-auto px-4">
        <p className="text-primary uppercase">Notice : ...................</p>
      </div>
    </header>
  );
};

export default Navbar;
