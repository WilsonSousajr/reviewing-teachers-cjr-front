import React from 'react';
import Image from 'next/image';
import { FaComment, FaShareSquare } from 'react-icons/fa';

interface UserPostProps {
    avatarUrl: string;
    userName: string;
    date: string;
    title: string;
    content: string;
    commentsCount: number;
}

const UserPost: React.FC<UserPostProps> = ({ avatarUrl, userName, date, title, content, commentsCount }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="flex items-center">
                <div className="relative w-12 h-12">
                    <Image 
                        src={avatarUrl}
                        alt="Profile Picture"
                        className="rounded-full"
                        layout="fill"
                    />
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
                        <FaComment className="mr-2" /> {commentsCount} comentários
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <FaShareSquare className="mr-2" /> Compartilhar
                    </button>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <FaRegEdit className="mr-2" /> 
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <FaTrash className="mr-2" /> 
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default UserPost;