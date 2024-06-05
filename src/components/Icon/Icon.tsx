import React from 'react'

interface Props{
  picture: string
}

const Icon: React.FC<Props> = ({picture}) => {
  return (
    <>
        <div className=' bg-white rounded-full w-20 h-20 flex justify-end items-center'>
            <img src={picture} alt="Foto de Perfil"/>
        </div>
    </>
  )
}

export default Icon