import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import 'react-toastify/dist/ReactToastify.css';

interface AvaliacaoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Teacher {
  id: number;
  name: string;
}

interface Discipline {
  id: number;
  name: string;
}

const AvaliacaoModal: React.FC<AvaliacaoModalProps> = ({ isOpen, onClose }) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  const initialValues = {
    nomeProf: "",
    nomeDisciplina: "",
    textoAvaliacao: "",
  };

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:3333/teachers');
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers: ", error);
      }
    };

    const fetchDisciplines = async () => {
      try {
        const response = await axios.get('http://localhost:3333/disciplines');
        setDisciplines(response.data);
      } catch (error) {
        console.error("Error fetching disciplines: ", error);
      }
    };

    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<{ sub: string }>(token);
      setUserId(decodedToken.sub);
    }

    fetchTeachers();
    fetchDisciplines();
  }, []);

  const handleSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    if (!userId) {
      toast.error("Usuário não autenticado.", {
        position: "top-right",
      });
      setSubmitting(false);
      return;
    }

    try {
      const teacher = teachers.find((t) => t.name === values.nomeProf);
      const discipline = disciplines.find((d) => d.name === values.nomeDisciplina);

      if (!teacher || !discipline) {
        throw new Error("Professor ou Disciplina não encontrados");
      }

      const requisition = {
        userId: parseInt(userId),
        teacherId: teacher.id,
        disciplineId: discipline.id,
        title: "",
        content: values.textoAvaliacao,
      };

      await axios.post("http://localhost:3333/reviews", requisition, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      toast.success("Avaliação postada com sucesso!", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error posting review: ", error);
      toast.error("Erro ao postar avaliação.", {
        position: "top-right",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    nomeProf: Yup.string().required("O nome do professor é obrigatório."),
    nomeDisciplina: Yup.string().required("O nome da disciplina é obrigatório."),
    textoAvaliacao: Yup.string().required("O texto da avaliação é obrigatório."),
  });

  return (
    <>
      {isOpen && (
        <div
          id="popup"
          className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.id === "popup") {
              onClose();
            }
          }}
        >
          <div className="bg-darkblue w-3/6 h-3/5 p-8 rounded-xl">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-4">
                  <Field as="select" name="nomeProf" className="w-full h-10 bg-white text-gray-600 px-4 rounded-full">
                    <option value="">Selecione o Professor</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.name}>{teacher.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="nomeProf"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field as="select" name="nomeDisciplina" className="w-full h-10 bg-white text-gray-600 px-4 rounded-full">
                    <option value="">Selecione a Disciplina</option>
                    {disciplines.map((discipline) => (
                      <option key={discipline.id} value={discipline.name}>{discipline.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="nomeDisciplina"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    as="textarea"
                    name="textoAvaliacao"
                    placeholder="Escreva sua avaliação..."
                    className="w-full h-40 bg-gray-400 text-black placeholder-gray-600 px-4 py-2 rounded-lg"
                  />
                  <ErrorMessage
                    name="textoAvaliacao"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex gap-5 justify-end">
                  <button
                    id="cancel"
                    onClick={onClose}
                    type="button"
                    className="bg-darkblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md"
                  >
                    Avaliar
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default AvaliacaoModal;
