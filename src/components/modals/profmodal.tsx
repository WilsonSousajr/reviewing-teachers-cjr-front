import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface CreateProfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProfModal: React.FC<CreateProfModalProps> = ({
  isOpen,
  onClose,
}) => {
  const initialValues = {
    nomeProf: "",
    nomeDisciplina: "",
  };

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Professor adicionado com sucesso!");
    }, 2000);
  };

  const validationSchema = Yup.object({
    nomeProf: Yup.string().required("O nome do professor é obrigatório."),
    nomeDisciplina: Yup.string().required(
      "O nome da disciplina é obrigatório."
    ),
  });

  return (
    <>
      {isOpen && (
        <div
          id="modalprof"
          className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.id === "modalprof") {
              onClose();
            }
          }}
        >
          <div className="bg-darkblue w-2/5 h-4/7 p-8 rounded-xl">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="flex flex-col justify-center gap-5">
                  <input
                    type="file"
                    className="bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md"
                  />

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
                    Criar
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

export default CreateProfModal;
