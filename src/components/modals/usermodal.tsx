import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Icon from "../Icon/Icon";

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
               <div className="flex flex-col gap-5">
                <div className="flex justify-items-center justify-center">
                  <Icon picture="https://s3-alpha-sig.figma.com/img/e698/2e6c/845dc909c50d919bd3b40deeb417a8bb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZiqoDb4kpkf8y1Rb0h1gSXcj~3tuSrBKatmqFBB~rM5qtetn6EzBst4kViv6~3B7Cobb9vkzQlQ0hqub1U-aREGatSK9wNxj3SuB20fHnwpAtzoo9cY8v60JfJSUHlnrPnJx3I5smNSa-ZSpkT~c~n7vB60EFPDZ2ECkDAxzVsIGEhxF67vSwmvPjw8htnS83MxzoMqY4nniUng8PkHwncTIgwU2hZx7lDiNMjl6pLDPMTQ3D-0eFZ-b9OKFI-nFgPvDx0KusBaq9s0F~g4JyQIlETI-ogtyBL1GJ-LobiSSDvXcM8Qea7m0P79KGjyo7ueVqHRKZk9MBx0Ouy2yw__" />

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
