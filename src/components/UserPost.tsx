import React from "react";
import logo from "/public/logo.png"

interface UserPostProps {
    avatarUrl: string;
    userName: string;
    date: string;
    title: string;
    content: string;
    commentsCount: number;
}

const UserPost: React.FC<UserPostProps> = ({ avatarUrl, userName, date, title, content, commentsCount }) => {
return(
    <>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="flex items-center">
                <div className="relative w-12 h-12">
                    <img className="rounded-full w-full h-full" src="avatarUrl.png" alt="Profile Picture" />
                </div>
                <div className="ml-4">
                    <h3 className="font-bold">{userName}</h3>
                    <p className="text-sm text-gray-600">{date} - {title}</p>
                </div>
            </div>
            <p className="mt-4 text-gray-800">
                {content}
            </p>
            <div className="mt-4 flex justify-between">
                <div className="flex gap-4">
                    <button className="flex items-center text-gray-600 hover:text-gray-800"> 
                        <img src = "FaComment.png" alt="" width={35} height={35} /> {commentsCount} comentários
                    </button>
                </div>
                <div className="flex gap-4">
                </div>
            </div>
        </div>

        </>
    )
}

export default UserPost;