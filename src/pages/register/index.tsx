"use client";

import Button from '@/components/Button';
import Foca from '@/images/foca.jpg.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Register () { 
    return(
        <main className="flex">
         <div id="blank" className="w-1/2 h-screen">
            <Image className="w-full h-full" src={Foca} alt="imagem de uma foca com computador"/>
         </div>
          <div className="w-1/2 h-screen text-white  bg-darkblue flex flex-col justify-evenly items-center">
           <div className="w-1/3 h-fit">
              <h1 className="text-5xl text-center text-white">Cadastro Usuário</h1>
            </div>
            <div id="user-info" className="">
                <form className="flex flex-col">
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Nome"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Senha"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Email"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Curso"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Departamento"></input>
                </form>
            </div> 
            <div className="flex justify-center gap-10">
            <Link href="/" passHref>
                <Button>Criar Conta</Button>
            </Link>
       </div>   
          </div>
        </main>
    );
};
