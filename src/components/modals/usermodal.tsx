import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  updateRoute: string
  name: string
  email: string
  departament: string
  course: string
  password: string
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, updateRoute, name, email, departament, course, password }) => {
  const initialValues = {
    nome: name,
    email: email,
    curso: course,
    departamento: departament,
    senhaAtual: "",
    senhaNova: "",
    confirmSenhaNova: "",
  };
  
  const validateCurrentPassword = (inputPassword: string) => {
    // Mock function to simulate password check
    // Replace with actual authentication logic
    return inputPassword === password;
  };

  const handleSubmit = async(
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    //enviar os dados do formulário (autenticação)
    if(values.senhaNova){
      console.log("Muda senha")
      console.log(values.senhaNova)
      try{
        const response = await axios.patch(updateRoute, {
          "email": values.email,
          "name": values.nome,
          "departament": values.departamento,
          "course": values.curso,
          "password": values.senhaNova
        })
        console.log("Usuario modificado com sucesso: ", response.data);
      }catch(error){
        console.error("Erro ao editar o usuario: ", error)
      }
    }else{
      console.log("Nao Muda senha")
      try{
        const response = await axios.patch(updateRoute, {
          "email": values.email,
          "name": values.nome,
          "departament": values.departamento,
          "course": values.curso
        })
        console.log("Usuario modificado com sucesso: ", response.data);
      }catch(error){
        console.error("Erro ao editar o usuario: ", error)
      }
    }

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Perfil editado com sucesso!");
    }, 2000);
  };

  const validationSchema = Yup.object({
    nome: Yup.string().required("O nome é obrigatório."),
    email: Yup.string().required("O email é obrigatório."),
    curso: Yup.string().required("O curso é obrigatório."),
    departamento: Yup.string().required("O departamento é obrigatório."),
    senhaAtual: Yup.string()
      .required("A senha atual é obrigatória.")
      .test("senhaAtual", "Senha atual incorreta.", (value) => validateCurrentPassword(value || "")),
    senhaNova: Yup.string(),
    confirmSenhaNova: Yup.string()
      .oneOf([Yup.ref("senhaNova")], "As senhas não coincidem.")
  });

  return (
    <>
      {isOpen && (
        <div
          id="edituser"
          className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.id === "edituser") {
              onClose();
            }
          }}
        >
          <div className=" bg-darkblue  w-1/3 h-7/9 p-8 rounded-xl">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="flex flex-col justify-center gap-5">
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
                    type="password"
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
                    type="password"
                    name="senhaNova"
                    placeholder="Nova senha"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="senhaNova"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="password"
                    name="confirmSenhaNova"
                    placeholder="Confirmar nova senha"
                    className="w-full h-10 bg-white text-gray-600 px-4 rounded-full"
                  />
                  <ErrorMessage
                    name="confirmSenhaNova"
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
