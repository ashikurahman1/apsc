import React from 'react';

const Navbar = () => {
  return (
    <header>
      {/* top header */}
      <section className="bg-neutral-900 text-white flex space-x-6">
        <div>
          <p>principle@apsc.com</p>
          <p>01758-801605</p>
        </div>
        <div>
          {/* Social Icons */}
          <div></div>
          <div>
            <button>Online Apply</button>
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
