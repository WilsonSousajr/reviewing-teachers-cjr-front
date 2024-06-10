import type { NextPage } from "next";
import Header from "../../../../components/Header/Header";
import UserPage from "../../../../components/User/UserPage";

const User: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <UserPage />
      </div>
    </>
    
  )
}

export default User;