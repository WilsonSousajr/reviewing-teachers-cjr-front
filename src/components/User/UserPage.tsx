import React from 'react';
import UserProfileHeader from '@/components/User/UserProfileHeader';
import UserPost from '@/components/User/UserPost';

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
interface UserPageProps {
  deleteRoute: string;
  updateRoute: string;
  userCourse: string;
  userDepartament: string;
  userEmail: string;
  userPassword: string;
  userName: string;
  userPicture: string;
  reviews: Review[];
  loggedInUserId: string | null;
  userId: number;
}

const UserPageComponent: React.FC<UserPageProps> = ({
  deleteRoute,
  updateRoute,
  userCourse,
  userDepartament,
  userEmail,
  userPassword,
  userName,
  userPicture,
  reviews,
  loggedInUserId,
  userId,
}) => {
  console.log('loggedInUserId:', loggedInUserId);
  console.log('userId:', userId);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <UserProfileHeader
        name={userName}
        department={userDepartament}
        course={userCourse}
        email={userEmail}
        password={userPassword}
        avatarUrl={userPicture}
        bannerUrl="http://localhost:3000/images/banner.png"
        deleteRoute={deleteRoute}
        updateRoute={updateRoute}
        loggedInUserId={loggedInUserId}
        userId={userId}
      />
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Publicações</h2>
        {reviews.length > 0 ? (
          reviews.map((post: Review, index) => (
            <UserPost
              key={index}
              avatarUrl={userPicture}
              userName={userName}
              id={post.id}
              date={post.createdAt}
              title={post.title}
              content={post.content}
              commentsCount={0}
              userId={post.userId}
              loggedInUserId={loggedInUserId}
            />
          ))
        ) : (
          <p>Não há postagens ainda!</p>
        )}
      </div>
    </div>
  );
};

export default UserPageComponent;
