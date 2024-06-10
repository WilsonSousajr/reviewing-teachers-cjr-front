import type { NextPage } from "next";
import UnloggedHeader from "../../../components/Header/unloggedHeader";
import UserPage from "../../../components/UserUnlogged/UserPage";

const Perfil_Deslogado: NextPage = () => {
  return (
    <>
      <UnloggedHeader />
      <div>
        <UserPage />
      </div>
    </>
    
  )
}

export default Perfil_Deslogado;