import React from 'react';
import Image from 'next/image';

interface UserProfileHeaderProps {
    name: string;
    department: string;
    disciplines: string[];
}

const TeacherProfileHeader: React.FC<UserProfileHeaderProps> = ({ name, department, disciplines }) => {
    return (
        <div className='bg-gray-100 rounded-lg shadow-md'>
            <div className='flex py-14'>
                <div className='w-full'>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1 ml-10">
                            <div className='flex flex-col items-start gap-2'> 
                                <h1 className="text-5xl font-bold pb-6">{name}</h1>
                                <p className="text-gray-600 pl-2">Departamento: {department}</p>
                                <p className="text-gray-500 pl-4 text-sm">Aulas: {disciplines.map((name, index) => (
                                    <span key={index}>
                                        {name}{disciplines.length-1 === index? "": ", "}
                                    </span>
                                ))}</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default TeacherProfileHeader;