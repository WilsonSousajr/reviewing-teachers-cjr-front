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
    textoAvaliacao: currentPost,
  };

  const router = useRouter()
  const handleSubmit = async(
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    //enviar os dados do formulário (autenticação)
    try{
      const response = await axios.patch(("http://localhost:3333/reviews/"+id), {
        "content": values.textoAvaliacao
      })
      console.log("Post modificado com sucesso: ", response.data)
      toast.success("Avaliação editada com sucesso!");
    }catch(error){
      console.error("Erro ao editar post: ", error)
    }finally{
      setSubmitting(false);
      router.reload()
    }
  };

  const validationSchema = Yup.object({
    textoAvaliacao: Yup.string().required(
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

                <div className="flex justify-center">
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