import React, { useState } from "react";
import Image from "next/image";
import { FaComment, FaShareSquare, FaRegEdit, FaTrash } from "react-icons/fa";
import CommentModalProps from "../modals/commentmodal";
import EditAvaliationModalProps from "../modals/editavaliation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

interface UserPostProps {
  id: number;
  avatarUrl: string;
  userName: string;
  date: string;
  title: string;
  content: string;
  commentsCount: number;
}

const UserPost: React.FC<UserPostProps> = ({
  id,
  avatarUrl,
  userName,
  date,
  title,
  content,
  commentsCount,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const router = useRouter()
  function deletePost(){
    axios.delete(("http://localhost:3333/reviews/"+id))
    .then(response =>{
      console.log("Post deleted: ", response)
      toast.success("Comentário deletado com sucesso!");
      router.reload()
    })
  }

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  function handleOpenEditModal() {
    setModalEditIsOpen(!modalEditIsOpen);
  }
  return (
    <>
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center">
        <div className="relative w-12 h-12">
          <Image
            src={avatarUrl}
            alt="Profile Picture"
            className="rounded-full"
            layout="fill"
            />
        </div>
        <div className="ml-4">
          <h3 className="font-bold">{userName}</h3>
          <p className="text-sm text-gray-600">
            {date} - {title}
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-800">{content}</p>
      <div className="mt-4 flex justify-between">
        <div className="flex gap-4">
          <button
            className="flex items-center text-gray-600 hover:text-gray-800"
            onClick={handleOpenModal}
            >
            <FaComment className="mr-2" /> {commentsCount} comentários
          </button>{" "}
          {<CommentModalProps isOpen={modalIsOpen} onClose={handleOpenModal} />}
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <FaShareSquare className="mr-2" /> Compartilhar
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="flex items-center text-gray-600 hover:text-gray-800"
            onClick={handleOpenEditModal}
            >
            <FaRegEdit className="mr-2" />
          </button>{" "}
          {<EditAvaliationModalProps isOpen={modalEditIsOpen} onClose={handleOpenEditModal} />}
          <button className="flex items-center text-gray-600 hover:text-gray-800" onClick={deletePost}>
            <FaTrash className="mr-2" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserPost;
