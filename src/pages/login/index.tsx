'use client';

import Foca from '@/images/foca.jpg';
import Image from 'next/image';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required.').min(8, 'Password is too short - should be 8 chars minimum.'),
});

const initialValues = {
    email: '',
    password: '',
};

const LoginForm = () => {
    const router = useRouter();

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('http://localhost:3333/auth/login', values);
            const token = response.data.access_token;

            localStorage.setItem('token', token);

            toast.success('Login realizado com sucesso!', {
                position: "top-right",
            });

            router.push('/');
        } catch (error) {
            toast.error('Erro ao fazer login!', {
                position: "top-right",
            });
            console.error('Erro ao fazer login:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="flex">
            <div id="blank" className="w-1/2 h-screen">
                <Image className="w-full h-full" src={Foca} alt="imagem de uma foca com computador" />
            </div>
            <div className="w-1/2 h-screen text-white bg-darkblue flex flex-col justify-evenly items-center">
                <div className="w-1/3 h-fit">
                    <h1 className="text-5xl text-center text-white">Login</h1>
                </div>
                <div id="user-info" className="">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col items-center">
                                <Field className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" name="email" type="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                                <Field className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" name="password" type="password" placeholder="Senha" />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                                <div className='flex gap-6'>
                                  <button type="submit" className="mt-5 bg-lightblue text-2xl py-4 px-12 rounded-lg outline" disabled={isSubmitting}>
                                      Entrar
                                  </button>
                                  <button type="button" className="mt-5 bg-lightblue text-2xl py-4 px-12 rounded-lg outline">
                                      <Link href={"/register"}>Criar conta</Link>
                                  </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <ToastContainer />
        </main>
    );
}

export default LoginForm;
