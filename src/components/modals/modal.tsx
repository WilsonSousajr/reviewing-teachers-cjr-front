import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface AvaliacaoModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const AvaliacaoModal: React.FC<AvaliacaoModalProps> = ({ isOpen, onClose }) => {
  const initialValues = {
    nomeProf: "",
    nomeDisciplina: "",
    textoAvaliacao: "",
  };

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    //enviar os dados do formulário (autenticação)

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Avaliação postada com sucesso!");
    }, 2000);
  };

  const validationSchema = Yup.object({
    nomeProf: Yup.string().required("O nome do professor é obrigatório."),
    nomeDisciplina: Yup.string().required(
      "O nome da disciplina é obrigatório."
    ),
    textoAvaliacao: Yup.string().required(
      "O texto da avaliação é obrigatório."
    ),
  });

  return (
    <>
      {isOpen && (
        <div
          id="popup"
          className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-darkblue w-3/6 h-3/5 p-8 rounded-xl">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="nomeProf"
                    placeholder="Nome do Professor"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="nomeProf"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="nomeDisciplina"
                    placeholder="Nome da Disciplina"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
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
        </div>
      )}
    </>
  );
};

export default AvaliacaoModal;
