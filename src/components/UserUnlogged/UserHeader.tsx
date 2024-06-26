import React from 'react';
import Image from 'next/image';
import banner from '/public/banner.png'
import FaEnvelope from '@/images/FaEnvelope.png';

interface UserProfileHeader {
    name: string;
    department: string;
    email: string;
    avatarUrl: string;
    bannerUrl: string;
}

const UserProfileHeader: React.FC <UserProfileHeader> = ({ name, department, email, avatarUrl, bannerUrl }) => {
    return (
        <div className='bg-gray-100 rounded-lg shadow-md'>
            <div className='flex'>
                <div className='w-full'>
                    <div>
                        <img src={bannerUrl} alt="" className='w-full rounded-t-lg h-151px' />
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1 ml-10">
                                <img src={avatarUrl} alt="Avatar" className='w-32 h-32 rounded-full'/>
                                <div className='flex flex-col items-start gap-2'> 
                                    <h1 className="text-2xl font-bold">{name}</h1>
                                    <p className="text-gray-600">{department}</p>
                                    <p className="text-gray-600">
                                        <img src='../../images/FaEnvelope.png' className="inline mr-2" />{email}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-3 mr-10">
                            
                               
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileHeader;