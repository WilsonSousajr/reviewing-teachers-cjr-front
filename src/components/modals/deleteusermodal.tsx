import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  deleteRoute: string
}

const DeleteModal: React.FC<DeleteModalProps> = ({deleteRoute, isOpen, onClose }) => {
  function deleteUser(){
    axios.delete(deleteRoute)
    .then(response => {
      console.log("User deleted :", response)
    })
  }
  return (
    <>
      {isOpen && (
        <>
          <div
            id="delete"
            className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center"
            onClick={(e) => {
              if (e.target.id === "delete") {
                onClose();
              }
            }}
          >
            <div className="bg-darkblue w-1/3 h-4/7 p-8 rounded-xl">
              <div className=" w-fit h-1/3">
                <h1 className="text-white text-3xl mb-4 ">
                  Deseja excluir o seu perfil?
                </h1>
                <p className="text-white mt-4 mb-4 ">
                  {" "}
                  Todos os dados da conta serão apagados permanentemente
                </p>
              </div>
              <div className="flex gap-5 justify-end">
                <button
                  id="cancel"
                  onClick={onClose}
                  type="button"
                  className="bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md"
                >
                  Voltar
                </button>
                <Link href={"/feed/logged"} passHref>
                <button
                    onClick={deleteUser}
                  type="button"
                  className="bg-red-700 text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md"
                >
                  Excluir
                </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteModal;
