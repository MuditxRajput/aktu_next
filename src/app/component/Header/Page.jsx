"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../Image/Aktu_Quantum.webp';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div>
        <Link href='/'>
          <Image src={Logo} alt="Logo" className="w-28 sm:w-44" />
        </Link>
      </div>
      <div className="hidden sm:flex">
        <ul className="flex gap-6 text-gray-700">
          <li className="hover:underline cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/component/Contact">Contact</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/component/About">About</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/component/Privacy">Privacy Policy</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/component/Disclaimer">Disclaimer</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/component/Dmca">Dmca</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="https://forms.gle/Dh9Vbg3ahG3Lkt8B6">Form</Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center text-gray-700 z-10">
          <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
            <FaTimes size={24} />
          </button>
          <ul className="flex flex-col items-center gap-6 text-lg">
            <li className="hover:underline cursor-pointer">
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/component/Contact" onClick={toggleMenu}>Contact</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/component/About" onClick={toggleMenu}>About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/component/Privacy" onClick={toggleMenu}>Privacy Policy</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/component/Disclaimer" onClick={toggleMenu}>Disclaimer</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/component/Dmca" onClick={toggleMenu}>Dmca</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
