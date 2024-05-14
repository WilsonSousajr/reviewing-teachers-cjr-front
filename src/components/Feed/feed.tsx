import React from 'react'
import TeacherBox from './Teacher-box/TeacherBox'

const Feed = () => {
  return (
    <>
        <div id="feed">
            <div className="flex justify-end mr-28">
                <input placeholder="Buscar Professor(a)" className="placeholder:flex placeholder:justify-center text-xl pr-40 pl-4 py-2 rounded-xl"></input>
            </div>
            <div id="new-teachers" className="mt-[-1rem] pl-40">
                <h1 className="text-3xl mb-4">Novos Professores</h1>
                <div className='flex flex-row overflow-clip hover:overflow-x-auto'>
                    <TeacherBox />
                    <TeacherBox />
                    <TeacherBox />
                    <TeacherBox />
                    <TeacherBox />
                    <TeacherBox />
                </div>
            </div>
        </div> 
    </>
  )
}

export default Feed