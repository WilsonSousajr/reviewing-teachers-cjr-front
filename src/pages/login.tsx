"use client";

export default function Register(){
  return(
      <main className="flex ">
          <div id="blank" className="w-1/2 h-screen"></div>
           <div id="register" className=" w-1/2 h-screen bg-darkblue text-white flex flex-col justify-evenly items-center">
            <div className="w-1/3 h-fit">
              <h1 className="text-5xl text-center">Avaliação de Professores</h1>
            </div>
            <div id="user-info" className="">
                <form className="flex flex-col">
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl"  placeholder="Email"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Nome"></input>
                </form>
            </div>
            <div className="flex justify-center gap-10">
                <button className="bg-lightblue text-2xl py-4 px-20 rounded-lg outline">Entrar</button>
                <button className="bg-lightblue text-2xl py-4 px-12 rounded-lg outline">Criar Conta</button>
            </div>
           </div>
      </main>
  )
}