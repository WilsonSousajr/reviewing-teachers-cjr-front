import React from 'react'

interface Props{
  name: string;
  ocuppation: string;
  picture: string
}

const TeacherBox: React.FC<Props> = ({name, ocuppation, picture}) => {
  return (
    <>
        <div className='w-52 h-72 bg-white p-6  flex flex-col items-center justify-center rounded-lg mx-6'>
            <img src={picture} alt="Foto de Perfil"
className='rounded-2xl w-38 h-38'/>
            <h2 className='mt-2 text-2xl'>{name}</h2>
            <h3 className='w-32 text-neutral-500 break-word text-center'>{ocuppation}</h3>
        </div>
    </>
  )
}

export default TeacherBox
