import React from 'react';
import UserProfileHeader from '@/components/User/UserProfileHeader';
import UserPost from '@/components/User/UserPost';
import { userAgent } from 'next/server';

const UserPage: React.FC = () => {
  const user = {
    name: "Morty Gamer",
    department: "Ciência da Computação / Dept. Ciência da Computação",
    email: "Morty.gamer.23@cjr.org.br",
    avatarUrl: "http://localhost:3000/images/profile-pic.png",
    bannerUrl: "http://localhost:3000/images/banner.png"
  }


    const posts = [
        {
            avatarUrl: "http://localhost:3000/images/profile-pic.png",
            userName: "Morty Gamer",
            date: "17/04/2024, às 21:42",
            title: "João Frango - Surf",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
            commentsCount: 2,
        },
        {
            avatarUrl: "http://localhost:3000/images/profile-pic.png",
            userName: "Morty Gamer",
            date: "15/04/2024, às 21:42",
            title: "Rick - Viagem Interdimensional",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
            commentsCount: 5,
        },
    ];

    return (
        <div className="max-w-4xl mx-auto mt-8 p-4">
            <UserProfileHeader 
                name={user.name}
                department= {user.department}
                email={user.email}
                avatarUrl={user.avatarUrl}	
                bannerUrl={user.bannerUrl}
            />

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Publicações</h2>
                {posts.map((post, index) => (
                    <UserPost 
                        key={index}
                        avatarUrl={post.avatarUrl}
                        userName={post.userName}
                        date={post.date}
                        title={post.title}
                        content={post.content}
                        commentsCount={post.commentsCount}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserPage;