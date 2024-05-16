import React from 'react';
import logo from "/public/logo.png"


const Header: React.FC = () => {
    return (
        <header className="w-screen h-20 bg-darkblue px-8 flex justify-between items-center mb-8">
            <img src="logo.png" alt="" width={75} height={75} />
            
            <button className="bg-neutral-500 text-lg text-white px-8 py-2 rounded-lg outline outline-2 outline-white height=55 width=154">Login</button>
        </header>

    )
}

export default Header;