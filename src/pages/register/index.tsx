"use client";

import Button from '@/components/Button';
import Foca from '@/images/foca.jpg.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
    course: Yup.string().required('No course provided'),
    department: Yup.string().required('No department provided'),
})

const initialValues = {
    name: '',
    email: '',
    password: '',
    course: '',
    department: '',
}

const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
        toast.success(JSON.stringify(values), {
            position: toast.POSITION.TOP_RIGHT
        });
        setSubmitting(false);
        resetForm();
    }, 1000);
}

const RegisterForm = () => (
    <div>
        <h1>Cadastro</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}  
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label>Nome</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <label>Curso</label>
                        <Field type="text" name="course" />
                        <ErrorMessage name="course" component="div" />
                    </div>
                    <div>
                        <label>Departamento</label>
                        <Field type="text" name="department" />
                        <ErrorMessage name="department" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default RegisterForm;

/*export default function Register () { 
    return(
        <main className="flex">
         <div id="blank" className="w-1/2 h-screen">
            <Image className="w-full h-full" src={Foca} alt="imagem de uma foca com computador"/>
         </div>
          <div className="w-1/2 h-screen text-white  bg-darkblue flex flex-col justify-evenly items-center">
           <div className="w-1/3 h-fit">
              <h1 className="text-5xl text-center text-white">Cadastro Usuário</h1>
            </div>
            <div id="user-info" className="">
                <form className="flex flex-col">
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Nome"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Senha"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Email"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Curso"></input>
                    <input className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" placeholder="Departamento"></input>
                </form>
            </div> 
            <div className="flex justify-center gap-10">
            <Link href="/" passHref>
                <Button>Criar Conta</Button>
            </Link>
       </div>   
          </div>
        </main>
    );
};
