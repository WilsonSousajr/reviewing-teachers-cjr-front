import UnloggedHeader from "@/components/Header/UnloggedHeader";
import UserPage from "@/components/UserUnlogged/UserPage";
import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

interface User {
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

const Perfil_Deslogado: NextPage = () => {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const { id } = router.query;
    if (!id) return;

    const reviewRoute = `http://localhost:3333/reviews/user/${id}`;
    const userRoute = `http://localhost:3333/users/${id}`;

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
        const response = await axios.get(userRoute);
        setUser(response.data);
        console.log("Fetched user: ", response.data);
      } catch (error) {
        console.error("Error fetching user: ", error);
      } finally {
        setLoadingUser(false);
      }
    }

    getReviews();
    getUser();
  }, [router.isReady, router.query]);

  return (
    <>
      <UnloggedHeader />
      {!loadingUser ? (
        user ? (
          <UserPage
            userDepartament={user.departament}
            userEmail={user.email}
            userName={user.name}
            userPicture={user.picture}
            reviews={reviews}
          />
        ) : (
          <p className="flex justify-center">Usuário não encontrado!</p>
        )
      ) : (
        <p>Carregando ...</p>
      )}
    </>
  );
};

export default Perfil_Deslogado;
