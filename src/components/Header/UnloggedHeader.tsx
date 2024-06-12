import Logo from "/public/images/logo.png";
import Image from "next/image";
import React from 'react'
import Link from "next/link";

const UnloggedHeader = () => {
  return (
    <>
    <div id="unloggedHeader" className="w-screen h-20 bg-darkblue px-8 flex justify-between items-center mb-8">
        <Image src={Logo} alt="Logo da Universidade de Brasília" width={50} height={50} />
        <div>
        <Link href="/login" passHref>
            <button className="bg-neutral-500 text-lg text-white px-8 py-2 rounded-lg outline outline-2 outline-white">Login</button>
        </Link>
        </div>
    </div>   
    </>
  )
}

export default UnloggedHeader