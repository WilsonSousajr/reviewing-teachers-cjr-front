import type { NextPage } from "next";
import Header from "../../../../components/Header/Header";
import UserPageComponent from "../../../../components/User/UserPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

const User: NextPage = () => {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);
  const [deleteRoute, setDeleteRoute] = useState("");
  const [updateRoute, setUpdateRoute] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      setLoading(false);
      setLoadingUser(false);
      return;
    }

    try {
      const decodedToken = jwtDecode<{ sub: string }>(token);
      const userId = decodedToken.sub;
      setLoggedInUserId(userId);

      if (!router.isReady) return;

      const { id } = router.query;
      if (!id) {
        console.error("User ID not found in the URL");
        setLoading(false);
        setLoadingUser(false);
        return;
      }

      const reviewRoute = `http://localhost:3333/reviews/user/${id}`;
      const userRoute = `http://localhost:3333/users/${id}`;

      setDeleteRoute(`http://localhost:3333/users/${id}`);
      setUpdateRoute(`http://localhost:3333/users/${id}`);

      const getReviews = async () => {
        try {
          const response = await axios.get(reviewRoute, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setReviews(response.data);
          console.log("Fetched reviews: ", response.data);
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      };

      const getUser = async () => {
        try {
          const response = await axios.get(userRoute, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const userData = response.data;
          if (userData.picture && !userData.picture.startsWith('/')) {
            userData.picture = `http://localhost:3333/uploads/${userData.picture}`;
          }
          setUser(userData);
          console.log("Fetched user: ", userData);
        } catch (error) {
          console.error("Error fetching user: ", error);
        }
      };

      getReviews();
      getUser();
    } catch (error) {
      console.error("Error decoding token:", error);
      setLoading(false);
      setLoadingUser(false);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (user !== null) {
      setLoading(false);
      setLoadingUser(false);
    }
  }, [user, reviews]);

  return (
    <>
      <Header />
      {!loadingUser ? (
        user ? (
          <UserPageComponent
            deleteRoute={deleteRoute}
            updateRoute={updateRoute}
            userCourse={user.course}
            userDepartament={user.departament}
            userEmail={user.email}
            userPassword={user.password}
            userName={user.name}
            userPicture={user.picture}
            reviews={reviews}
            loggedInUserId={loggedInUserId}
            userId={user.id}
          />
        ) : (
          <p className="flex justify-center">Usuario nao encontrado!</p>
        )
      ) : (
        <p>Carregando ...</p>
      )}
    </>
  );
};

export default User;
