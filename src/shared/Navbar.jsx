import React from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

const Navbar = () => {
  return (
    <header>
      {/* top header */}
      <section className="bg-neutral-900 text-white space-x-6 p-2">
        <div className="flex flex-col items-center lg:flex-row justify-between lg:w-10/12 px-4 mx-auto">
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
              <button>Online Apply</button>
            </div>
          </div>
        </div>
      </section>
      {/* navigation */}
      <nav></nav>
      <p>Hello</p>
    </header>
  );
};

export default Navbar;
