import type { NextPage } from "next";
import Header from "../../../../components/Header/Header";
import UserPage from "../../../../components/User/UserPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

interface Review {
  id: number;
  userId: number;
  teacherId: number;
  disciplineId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
interface User{
  id: number;
  email: string;
  password: string;
  name: string;
  picture: string;
  departament: string;
  course: string;
  createdAt: string;
  updatedAt: string;
}

const User: NextPage = () => {
  const router = useRouter();
    
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadinguser] = useState(true);
  const [deleteRoute, setDeleteRoute] = useState("");
  const [updateRoute, setUpdateRoute] = useState("");
  let reviewRoute: string= "";
  let userRoute: string= "";
  
  
  useEffect(() => {
      if(!router.isReady) return
      const id = router.query;
      reviewRoute = 'http://localhost:3333/reviews/user/'+id?.id
      userRoute = 'http://localhost:3333/users/'+id?.id
      setDeleteRoute(('http://localhost:3333/users/'+id?.id))
      setUpdateRoute("http://localhost:3333/users/" + id?.id)
      async function getReviews() {
          try {
              const response = await axios.get(reviewRoute);
              setReviews(response.data);
              console.log("Fetched reviews: ", response.data);
          } catch (error) {
              console.error("Error fetching reviews:", error);
          } finally {
              setLoading(false);
          }
      }

      async function getUser() {
          try {
              const response = await axios.get(userRoute)
              setUsers(response.data)
          }catch (error){
              console.error("Error fetching teacher: ", error)
          }finally {
              setLoadinguser(false);
          }
      }
      
      getReviews();
      getUser();
  }, [router.isReady]);
  return (
    <>
      <Header />
      {!loadingUser? (
        users.length > 0 ? (
          users.map((user: User, index) => (
            <div key={index}>
              <UserPage deleteRoute={deleteRoute} userDepartament={user.departament} userEmail={user.email} userName={user.name} userPicture={user.picture} reviews={reviews} />
            </div>
          ))
        ) : (<p className="flex justify-items-center">Usuario nao encontrado!</p>)
      ) : (
        <p>Carregando ...</p>
      )}
    </>
    
  )
}

export default User;