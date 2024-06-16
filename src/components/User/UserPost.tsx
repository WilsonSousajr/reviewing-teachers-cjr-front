import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaComment, FaShareSquare, FaRegEdit, FaTrash } from "react-icons/fa";
import CommentModalProps from "../modals/commentmodal";
import EditAvaliationModalProps from "../modals/editavaliation";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";

interface UserPostProps {
  id: number;
  avatarUrl: string;
  userName: string;
  date: string;
  title: string;
  content: string;
  commentsCount: number;
  userId: number;
}

const UserPost: React.FC<UserPostProps> = ({
  id,
  avatarUrl,
  userName,
  date,
  title,
  content,
  commentsCount,
  userId,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<{ sub: string }>(token);
      setLoggedInUserId(decodedToken.sub);
    }

    console.log(loggedInUserId)
    console.log(userId)
  }, []);

  const deletePost = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Usuário não autenticado.");
      return;
    }


    try {
      const response = await axios.delete(`http://localhost:3333/reviews/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Post deleted: ", response);
      toast.success("Comentário deletado com sucesso!");
      router.reload();
    } catch (error) {
      console.error("Erro ao deletar o post: ", error);
      toast.error("Erro ao deletar o comentário.");
    }
  };

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

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
          </div>
          {loggedInUserId == userId.toString() && (
            <div className="flex gap-4">
              <button
                className="flex items-center text-gray-600 hover:text-gray-800"
                onClick={handleOpenEditModal}
              >
                <FaRegEdit className="mr-2" />
              </button>{" "}
              {<EditAvaliationModalProps isOpen={modalEditIsOpen} onClose={handleOpenEditModal} id={id} currentPost={content} />}
              <button className="flex items-center text-gray-600 hover:text-gray-800" onClick={deletePost}>
                <FaTrash className="mr-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserPost;
