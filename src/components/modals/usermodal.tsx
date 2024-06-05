import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
interface UserModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  const initialValues = {
    nome: "",
    email: "",
    curso: "",
    departamento: "",
    senhaAtual: "",
    senhaNova: "",
    confirmSenhaNova: "",
  };

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    //enviar os dados do formulário (autenticação)

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Perfil editado com sucesso!");
    }, 2000);
  };

  const validationSchema = Yup.object({
    nome: Yup.string().required("O nome é obrigatório."),
    email: Yup.string().required("O email é obrigatório."),
    curso: Yup.string().required("O cursp é obrigatório."),
    departamento: Yup.string().required("O departamento é obrigatório."),
  });

  return (
    <>
      {isOpen && (
        <div
          id="edituser"
          className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center"
        >
          <div className=" bg-darkblue  w-1/3 h-8/9 p-8 rounded-xl">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="felx felx-col gap-5">
                <div className="flex justify-end">
                  <button
                    id="cancel"
                    onClick={onClose}
                    type="button"
                    className=" bg-darkblue text-white rounded-full w-10 h-10 outline outline-white outline-2 shadow-black shadow-md"
                  >
                    X
                  </button>
                </div>
              
                <div className="mb-4">
                  <Field
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="nome"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="curso"
                    placeholder="Curso"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="curso"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="departamento"
                    placeholder="Departamento"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="departamento"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="senhaAtual"
                    placeholder="Senha atual"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="senhaAtual"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="novaSenha"
                    placeholder="Nova senha"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="novaSenha"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="confitmNovaSenha"
                    placeholder="Confirmar nova senha"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="confirmNovaSenha"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md"
                  >
                    Salvar
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

export default UserModal;
