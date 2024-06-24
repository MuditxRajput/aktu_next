import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="rounded-lg shadow m-4 bg-orange-600 mt-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-white">
          © 2024 Aktu-Quantum. All Rights Reserved.
        </span>
        <ul className="flex gap-8 text-white">
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
        <ul className="flex items-center mt-3 text-white">
          <li className="me-4">
            <Link href="https://www.linkedin.com/in/mudit-rajput/">
              <FaLinkedin className="text-white" />
            </Link>
          </li>
          <li className="me-4">
            <Link href="https://www.instagram.com/react.build__/">
              <FaInstagram className="text-white" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/">
              <FaTwitter className="text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer