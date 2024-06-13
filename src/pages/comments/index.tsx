import React from "react";
import Header from "../../components/Header/Header";
import { FaArrowCircleLeft } from "react-icons/fa";

function Comments() {
  return (
    <>
      <Header profileImageUrl={""} />

      <div className=" pt-4 pl-64 items-start">
        <button id="voltar" className=" text-gray-600 hover:text-gray-800">
          <FaArrowCircleLeft size={39} />
        </button>
      </div>
      <div className="h-screen flex items-center justify-center pt-0">
        <div id="fundoCentro" className="w-1/2 h-screen bg-white shadow-md">
          <div
            id="organizarComentarios"
            className="flex flex-col justify-center items-center gap-5"
          >
            <div
              id="comentario"
              className=" w-4/5 h-32 bg-lightblue shadow-md rounded-md"
            ></div>
            <div
              id="comentario"
              className=" w-4/5 h-32 bg-lightblue shadow-md rounded-md"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
