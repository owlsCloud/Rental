import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="items-center flex h-auto justify-between left-0  mx-auto my-0 p-8 absolute  right-0 top-0 w-full z-10">
        <div>img</div>
        <ul className="flex gap-8">
          <li className="hover:text-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="/models">Vehicle Models</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="/team">Our Team</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-2.5 text-lg items-center">
          <a className="hover:text-primary" href="/">
            Sign In
          </a>
          <a
            href="/"
            className="bg-primary text-[#fff] rounded-[3px] py-1.5 px-3"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
