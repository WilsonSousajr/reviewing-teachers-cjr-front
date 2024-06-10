import React from 'react';
import UserHeader from './UserHeader';
import UserPost from './UserPost';

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
interface Props{
    userName: string;
    userDepartament: string;
    userEmail: string;
    userPicture: string;
    reviews: Review[]
}

const UserPage: React.FC<Props> = ({userDepartament, userEmail, userName, userPicture, reviews}) => {
    return (
        <div className="max-w-4xl mx-auto mt-8 p-4">
            <UserHeader 
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
                )
              )
            }
            </div>
        </div>
    )
}

export default UserPage;