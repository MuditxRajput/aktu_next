"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../Image/Aktu_Quantum.webp';

const Header = () => {
  return (
    <div className="flex justify-between m-4">
      <div>
        <Link href='/'><Image src={Logo} alt="Logo" className="w-28 sm:w-44" /> </Link>
        
      </div>
      <div className="hidden sm:flex">
        <ul className="flex gap-8">
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
        </ul>
      </div>
      <div className="sm:hidden">
        Hamburger
      </div>
    </div>
  );
};

export default Header;
