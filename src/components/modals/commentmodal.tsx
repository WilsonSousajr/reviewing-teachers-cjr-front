import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose }) => {
  const initialValues = {
    textoComentario: "",
  };

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    //enviar os dados do formulário (autenticação)

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Comentario postado com sucesso!");
    }, 2000);
  };

  const validationSchema = Yup.object({
    textoComentario: Yup.string().required(
      "O texto do comentário é obrigatório."
    ),
  });

  return (
    <>
      {isOpen && (
        <div
          id="comentario"
          className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.id === "comentario") {
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
                    name="textoComentario"
                    placeholder="Escreva um comentario..."
                    className="w-full h-64 bg-gray-400 text-black placeholder-gray-600 px-4 py-2 rounded-lg"
                  />
                  <ErrorMessage
                    name="textoComentario"
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
                    Comentar
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentModal;
