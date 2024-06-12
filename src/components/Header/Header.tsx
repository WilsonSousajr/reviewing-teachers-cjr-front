import Image from 'next/image';
import Logo from "/public/images/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import React from 'react';

interface HeaderProps {
  profileImageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ profileImageUrl }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" passHref>
        <div className="flex items-center">
          <Image src={Logo} alt="Logo da Universidade de Brasília" width={50} height={50} />
        </div>
      </Link>
      <div className='flex space-x-4'>
        <button className='hover:text-gray-400'>
          <IoIosNotifications size={24} />
        </button>
        <Link href="/user/logged" passHref>
          <button className='hover:text-gray-400'>
            {profileImageUrl ? (
              <Image src={profileImageUrl} alt="Profile Image" width={24} height={24} className="rounded-full" />
            ) : (
              <FaUserCircle size={24} />
            )}
          </button>
        </Link>
        <Link href="/" passHref>
          <button className='hover:text-gray-400'>
            <ImExit size={24} />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
