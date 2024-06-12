import React, { FormEvent, useEffect, useState } from "react";
import TeacherBox from "./Teacher-box/TeacherBox";
import AvaliacaoModalProps from "../modals/modal";
import axios from "axios";
import Link from "next/link";

interface Teacher {
  id: number;
  name: string;
  departament: string;
  createdAt: string;
  updatedAt: string;
}

function LogFeed() {
  const [teachers, setTeachers] = useState([]);
  const [new_teachers, setNewTeachers] = useState([]);
  const [foundTeachers, setFoundTeachers] = useState(false);
  const teachersRoute = 'http://localhost:3333/teachers/';

  useEffect(() => {
      async function getTeachers(){
          try{
              const response = await axios.get(teachersRoute);
              setTeachers(response.data);
              setNewTeachers(teachers.slice(0, 6))
            
          }
          catch(error){
              console.error("Error fetching teachers: ", error);
          }
          finally{
              setFoundTeachers(true);
          }
          
      }
      getTeachers();
  })
  
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const toggleDropdown = () => {
    setDropdownAberto(!dropdownAberto);
  };

  return (
    <>
      <div id="feed">
        <div className="flex justify-end mr-28">
          <input
            placeholder="Buscar Professor(a)"
            className="placeholder:flex placeholder:justify-center text-xl pr-40 pl-4 py-2 rounded-xl"
          ></input>
        </div>
        <div id="new-teachers" className="mt-[-1rem]">
          <h2 className="text-3xl mb-4 pl-40">Novos Professores</h2>
          <div className="flex flex-col items-center">
            <div className="justify-start grid grid-cols-6 gap-y-6 overflow-hidden mb-8">
              {/* Usage: <TeacherBox name='-name-' ocuppation='-ocuppation-' picture='-url-'/> */}
              {foundTeachers? (
                            new_teachers.map((teacher: Teacher, index) =>(
                            <Link href={"/teacher/"+teacher.id} key={index} passHref>
                                <TeacherBox name={teacher.name} ocuppation={teacher.departament} picture='https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg'></TeacherBox>
                            </Link>
                            ))
                        ) : 
                        (<span>Carregando professores ...</span>)}
            </div>
            <hr className="border-black leading-3 w-[90%] mb-8" />
          </div>
        </div>
        <div
          id="DropDown"
          className="flex justify-end mr-28 relative space-x-3"
        >
          <button
            className="bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md"
            onClick={handleOpenModal}
          >
            {" "}
            Nova Publicação
          </button>{" "}
          {
            <AvaliacaoModalProps
              isOpen={modalIsOpen}
              onClose={handleOpenModal}
            />
          }
          <div className="block">
            <button
              onClick={toggleDropdown}
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              type="button"
              className="bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md"
            >
              Ordenar
            </button>
            {dropdownAberto && (
              <div
                id="dropdownHover"
                className="z-10 bg-slate-300 px-2 divide-y divide-black rounded-lg shadow w-60 ml-[-7rem] mb-[-6rem] overflow-visible mt-[3px]"
              >
                <a className="text-black py-1 px-3 block" href="">
                  Link1
                </a>
                <a className="text-black py-1 px-3 block" href="">
                  Link2
                </a>
                <a className="text-black py-1 px-3 block" href="">
                  Link3
                </a>
              </div>
            )}
          </div>
        </div>
        <div id="every-teacher" className="mt-[-1rem]">
          <h2 className="text-3xl mb-4 pl-40">Todos os Professores</h2>
          <div className="flex flex-col items-center">
            <div className="justify-start grid grid-cols-6 gap-y-6 overflow-hidden mb-8">
              {/* Usage: <TeacherBox name='-name-' ocuppation='-ocuppation-' picture='-url-'/> */}
              {foundTeachers? (
                            teachers.map((teacher: Teacher, index) =>(
                            <Link href={"/teacher/"+teacher.id} key={index} passHref>
                                <TeacherBox name={teacher.name} ocuppation={teacher.departament} picture='https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg'></TeacherBox>
                            </Link>
                            ))
                        ) : 
                        (<span>Carregando professores ...</span>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogFeed;
