import React from "react";
import Logo from "/public/images/logo.png";

const Header = () => {
return(
    <>
    <div className="w-screen h-20 bg-darkblue px-8 flex justify-between items-center mb-8">
        <img src="logo.png" alt="" width={75} height={75} />
        <div>
        <button 
        type = "button"
        className="bg-neutral-500 text-lg text-white px-8 py-2 rounded-lg outline outline-2 outline-white height=55 width=154">
        Login</button>
    </div>

        </div>
        </>
    )
}