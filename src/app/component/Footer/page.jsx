import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-600 mt-10 w-full rounded-lg shadow p-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-center text-white mb-4 md:mb-0">
          © 2024 Aktu-Quantum. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap gap-5 text-white justify-center mb-4 md:mb-0">
          <li className="hover:underline cursor-pointer text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline cursor-pointer text-sm">
            <Link href="/component/Contact">Contact</Link>
          </li>
          <li className="hover:underline cursor-pointer text-sm">
            <Link href="/component/About">About</Link>
          </li>
          <li className="hover:underline cursor-pointer text-sm">
            <Link href="/component/Privacy">Privacy Policy</Link>
          </li>
          <li className="hover:underline cursor-pointer text-sm">
            <Link href="/component/Disclaimer">Disclaimer</Link>
          </li>
          <li className="hover:underline cursor-pointer text-sm">
            <Link href="/component/Dmca">Dmca</Link>
          </li>
        </ul>
        <ul className="flex justify-center gap-4 text-white">
          <li>
            <Link href="https://www.linkedin.com/in/mudit-rajput/">
              <FaLinkedin className="text-xl hover:text-gray-300 transition-colors duration-200" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/react.build__/">
              <FaInstagram className="text-xl hover:text-gray-300 transition-colors duration-200" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/">
              <FaTwitter className="text-xl hover:text-gray-300 transition-colors duration-200" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
