import UnloggedHeader from "@/components/Header/unloggedHeader";
import UserPage from "@/components/UserUnlogged/UserPage";
import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  userId: number;
  teacherId: number;
  disciplineId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
interface User{
  id: number;
  email: string;
  password: string;
  name: string;
  picture: string;
  departament: string;
  course: string;
  createdAt: string;
  updatedAt: string;
}

const Perfil_Deslogado: NextPage = () => {
  return (
    <>
      <UnloggedHeader />
      <div>
        <UserPage />
      </div>
    </>
    
  )
}

export default Perfil_Deslogado;