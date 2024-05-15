"use client";



export default function Register(){
  return(
      <main className="flex ">
          <div id="blank" className="w-1/2 h-screen">
            {/* <img src="https://s3-alpha-sig.figma.com/img/9b6a/a52b/995c162a4624cf80aa79425378a352b3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d5wVVKxTs5QtKEW8ExSXHH56f2rG5RVRHOM73OXQL9njUD5xsXPsmhszRvJtaosnzgynQGJJew9bnKmA8hoVB9aACAX2w6D4aUocc~LL3avBaU4ypoZuD36LhZ8gIN~uIZMCRm0U3A~TyDz38l3TagdpTgapMq89Ln2WXcc8Cjvxj2Kgl0zQVmHpDZT4qDO8sJMEyMiREapYiTYoMAri8gLHmBwyXuQ9tn2xUGQV6CQ8tLiWD9s-9hwv5cBjvuPk6UIOm7YroJZeeS2Y7oRhxNF0HGQLp9uwqt37890RvexVgEX5L2ideAA51jCPWDU1g~vrkph1X4Ly3r54xOmK9Q__" alt="focatia" /> */}
          </div>
          <div id="register" className=" w-1/2 h-screen bg-darkblue text-white flex flex-col justify-evenly items-center">
            <div className="w-1/3 h-fit">
              <h1 className="text-5xl text-center">Avaliação de Professores</h1>
            </div>
            <div id="user-info" className="">
                <form className="flex flex-col">
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Email" type="email"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Senha" type="password"></input>
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