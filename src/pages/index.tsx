import React, { useEffect, useState } from 'react';
import Header from "@/components/Header/Header";
import UnloggedHeader from "@/components/Header/UnloggedHeader";
import Feed from "@/components/Feed/feed";

const HomePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <main>
      {isLoggedIn ? <Header /> : <UnloggedHeader />}
      <Feed />
    </main>
  );
};

export default HomePage;
