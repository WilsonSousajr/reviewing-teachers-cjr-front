import React from 'react'

interface IconProps{
  picture: string
}

const Icon: React.FC<IconProps> = ({picture}) => {
  return (
    <>
        <div className=' bg-white rounded-full w-20 h-20 flex justify-end items-center'>
            <img src={picture} alt="Foto de Perfil"/>
        </div>
    </>
  )
}

export default Icon