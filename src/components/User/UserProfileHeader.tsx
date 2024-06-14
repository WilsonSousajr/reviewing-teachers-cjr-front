import React, { useState } from 'react';
import Image from 'next/image';
import { FaEnvelope, FaUserEdit, FaTrash } from 'react-icons/fa';
import UserModalProps from "../modals/usermodal"
import DeleteModal from '../modals/deleteusermodal';

interface UserProfileHeaderProps {
    name: string;
    department: string;
    course: string
    email: string;
    password: string
    avatarUrl: string;
    bannerUrl: string;
    deleteRoute: string
    updateRoute: string;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({ name, department, course, email, password, avatarUrl, bannerUrl, deleteRoute, updateRoute }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalIsOpen] = useState(false);

    function handleOpenModal() {
      setModalIsOpen(!modalIsOpen);
    }

    function handleDeleteModal() {
        setDeleteModalIsOpen(!deleteModalOpen)
    }
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
                                <Image width={32} height={32} src={avatarUrl} alt="Avatar"  className='w-32 h-32 rounded-full'/>
                                <div className='flex flex-col items-start gap-2'> 
                                    <h1 className="text-2xl font-bold">{name}</h1>
                                    <p className="text-gray-600">{department}</p>
                                    <p className="text-gray-600">
                                        <FaEnvelope className="inline mr-2" />{email}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-3 mr-10">
                                <button className="bg-lightblue text-white text-xl py-2 px-4 rounded-xl outline outline-white outline-2 shadow-black shadow-md flex items-center" onClick={handleOpenModal}>
                                
                                    <FaUserEdit className="mr-2" /> Editar Perfil
                                </button> 
                                {
                                    <UserModalProps
                                    isOpen={modalIsOpen}
                                    onClose={handleOpenModal}
                                    name={name}
                                    departament={department}
                                    course={course}
                                    email={email}
                                    password={password}
                                    updateRoute={updateRoute}
                                    />
                                }
           
                                <button className="bg-red-700 text-white text-xl py-2 px-4 rounded-xl outline outline-white outline-2 shadow-black shadow-md flex items-center" onClick={handleDeleteModal}>
                                    <FaTrash className="mr-2" /> Excluir Perfil
                                </button>{
                                    <DeleteModal
                                    isOpen={deleteModalOpen}
                                    onClose={handleDeleteModal}
                                    deleteRoute={deleteRoute}
                                    />
                                }
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileHeader;