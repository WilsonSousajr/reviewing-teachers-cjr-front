import Image from 'next/image';
import Logo from "/public/images/logo.png";
import { ImExit } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const Header: React.FC = () => {
  const [userProfileImageUrl, setUserProfileImageUrl] = useState<string>('');
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token no localStorage:", token);
    if (token) {
      try {
        const decodedToken = jwtDecode<{ sub: string }>(token);
        console.log("Token decodificado:", decodedToken);
        const userId = decodedToken.sub;
        setUserId(userId);

        fetch(`http://localhost:3333/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            console.log("Resposta da API status:", response.status);
            console.log("Resposta da API headers:", response.headers.get('content-type'));
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log("Dados do usuário:", data);
            const profileImageUrl = data.picture.startsWith('/')
              ? `http://localhost:3333${data.picture}`
              : `http://localhost:3333/uploads/${data.picture}`;
            setUserProfileImageUrl(profileImageUrl);
          })
          .catch(error => {
            console.error('Erro ao buscar dados do usuário:', error);
          });
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" passHref>
        <div className="flex items-center">
          <Image src={Logo} alt="Logo da Universidade de Brasília" width={50} height={50} />
        </div>
      </Link>
      <div className='flex space-x-4 items-center'>
        {userId && (
          <Link href={`/user/${userId}/logged`} passHref>
            <button className='hover:text-gray-400'>
              {userProfileImageUrl ? (
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image src={userProfileImageUrl} alt="Profile Image" width={40} height={40} objectFit="cover" />
                </div>
              ) : (
                <FaUserCircle size={40} />
              )}
            </button>
          </Link>
        )}
        <button onClick={handleLogout} className='hover:text-gray-400'>
          <ImExit size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
