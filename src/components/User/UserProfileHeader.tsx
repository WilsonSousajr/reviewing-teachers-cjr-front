import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaUserEdit, FaTrash } from 'react-icons/fa';

interface UserProfileHeaderProps {
    name: string;
    department: string;
    email: string;
    avatarUrl: string;
    bannerUrl: string;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({ name, department, email, avatarUrl, bannerUrl }) => {
    return (
        <div className='bg-gray-100 rounded-lg shadow-md p-2'>
            <div className='flex items-center space-x-4'>
                <div className='relative'>
                    <Image 
                        src={avatarUrl}
                        alt="Profile Picture"
                        className="rounded-full"
                        layout="responsive"
                        width={48}
                        height={48}
                    />
                    <div className="flex flex-col ml-6">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="text-gray-600">{department}</p>
                        <p className="text-gray-600">
                            <FaEnvelope className="inline mr-2" />{email}
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                                <FaUserEdit className="mr-2" /> Editar Perfil
                            </button> 
                            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center">
                                <FaTrash className="mr-2" /> Excluir Perfil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileHeader;