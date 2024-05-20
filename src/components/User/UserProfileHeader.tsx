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
        <div className='bg-gray-100 rounded-lg shadow-md'>
            <div className='flex'>
                <div className='w-full'>
                    <div>
                        <img src={bannerUrl} alt="Banner" className='w-full rounded-t-lg' />
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1 ml-10">
                                <img src={avatarUrl} alt="Avatar"  className='w-32 h-32 rounded-full'/>
                                <div className='flex flex-col items-start gap-2'> 
                                    <h1 className="text-2xl font-bold">{name}</h1>
                                    <p className="text-gray-600">{department}</p>
                                    <p className="text-gray-600">
                                        <FaEnvelope className="inline mr-2" />{email}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-3 mr-10">
                                <button className="w-36 h-12 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                                    <FaUserEdit className="mr-2" /> Editar Perfil
                                </button> 
                                <button className="w-36 h-12 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center">
                                    <FaTrash className="mr-2" /> Excluir Perfil
                                </button>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileHeader;