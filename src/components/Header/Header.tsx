import  Image from 'next/image';
import Logo from "/public/images/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import Link from "next/link";
import React from 'react';


const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link href="/feed/unlogged" passHref>
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
                        <FaUserCircle size={24} />
                    </button>
                </Link>
                <Link href="/" passHref>
                    <button className='hover:text-gray-400'>
                        <ImExit size={24} />
                    </button>
                </Link>
            </div>
        </header>
    )
}


export default Header;