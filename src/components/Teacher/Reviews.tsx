import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Props {
    title: string;
    content: string;
    date: string;
    avatarUrl: string;
    userId: number;
    isLoggedIn: boolean; // Adicionado para verificar se o usuário está logado
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

const Review: React.FC<Props> = ({ avatarUrl, userId, date, title, content, isLoggedIn }) => {
    const [user, setUser] = useState<User | null>(null);
    const [foundUser, setFoundUser] = useState(false);

    const newDate = new Intl.DateTimeFormat('pt-br', {
        dateStyle: "short",
        timeStyle: "short",
    }).format(Date.parse(date));

    useEffect(() => {
        async function getUserInfo() {
            try {
                const response = await axios.get(`http://localhost:3333/users/${userId}`);
                setUser(response.data);
                setFoundUser(true);
                console.log("Fetched user: ", response.data);
            } catch (error) {
                console.error("Error fetching user: ", error);
                setFoundUser(false);
            }
        }
        getUserInfo();
    }, [userId]);

    return (
        <>
            {foundUser && user ? (
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <div className="flex items-center">
                        <div className="relative w-12 h-12">
                            <img className="rounded-full w-full h-full" src={user.picture.startsWith('/')
                                ? `http://localhost:3333${user.picture}`
                                : `http://localhost:3333/uploads/${user.picture}`} alt="Profile Picture" />
                        </div>
                        <div className="ml-4">
                            {isLoggedIn ? (
                                <Link href={`/user/${user.id}/logged`}>
                                    {user.name}
                                </Link>
                            ) : (
                                <span>{user.name}</span>
                            )}
                            <p className="text-sm text-gray-600">{newDate} - {title}</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-800">
                        {content}
                    </p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <div className="flex items-center">
                        <div className="relative w-12 h-12">
                            <img className="rounded-full w-full h-full" src={avatarUrl} alt="Finding User" />
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold">Carregando Usuário</h3>
                            <p className="text-sm text-gray-600">{newDate} - {title}</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-800">
                        {content}
                    </p>
                </div>
            )}
        </>
    );
};

export default Review;
