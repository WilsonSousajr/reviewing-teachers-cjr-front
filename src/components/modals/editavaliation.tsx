import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

interface EditAvaliationModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  currentPost: string
}

const EditAvaliationModal: React.FC<EditAvaliationModalProps> = ({ isOpen, onClose, id, currentPost }) => {
  const initialValues = {
    textoAvaliacao: "",
  };

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    //enviar os dados do formulário (autenticação)

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Avaliação editada com sucesso!");
    }, 2000);
  };

  const validationSchema = Yup.object({
    textoComentario: Yup.string().required(
      "O texto da avaliação é obrigatório."
    ),
  });

  return (
    <>
      {isOpen && (
        <div
          id="avaliacao"
          className="fixed z-50 top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.id === "avaliacao") {
              onClose();
            }
          }}
        >
          <div className="bg-darkblue w-3/5 h-3/5 p-8 rounded-xl">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-4">
                  <Field
                    as="textarea"
                    name="textoAvaliacao"
                    placeholder="Escreva a sua avaliação..."
                    className="w-full h-64 bg-gray-400 text-black placeholder-gray-600 px-4 py-2 rounded-lg"
                  />
                  <ErrorMessage
                    name="textoAvaliacao"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex gap-x-80">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      className="size-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
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
                      Editar
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAvaliationModal;