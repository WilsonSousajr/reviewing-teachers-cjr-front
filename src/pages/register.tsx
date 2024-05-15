"use client";

import Button from '@/components/Button';

export default function Register () { 
    return(
        <main className="flex">
         <div id="blank" className="w-1/2 h-screen"></div>
          <div className="w-1/2 h-screen text-white  bg-darkblue flex flex-col justify-evenly items-center">
           <div className="w-1/3 h-fit">
              <h1 className="text-5xl text-center text-white">Cadastro Usuário</h1>
            </div>
            <div id="user-info" className="">
                <form className="flex flex-col">
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Nome"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Email"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Senha"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Curso"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Departamento"></input>
                </form>
            </div> 
            <div className="flex justify-center gap-10">
            <Button>Criar Conta</Button>
       </div>   
          </div>
        </main>
    );
};
