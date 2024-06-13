'use client';

import Foca from '@/images/foca.jpg';
import DefaultUser from '@/images/defaultUser.svg';
import Image from 'next/image';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória').min(8, 'A senha deve ter no mínimo 8 caracteres.'),
    course: Yup.string().required('Curso é obrigatório'),
    departament: Yup.string().required('Departamento é obrigatório'),
});

const initialValues = {
    name: '',
    email: '',
    password: '',
    course: '',
    departament: '',
    picture: null,
};

const RegisterForm = () => {
    const router = useRouter();
    const [imagePreview, setImagePreview] = useState(DefaultUser);

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const formData = new FormData();
            Object.keys(values).forEach(key => {
                if (values[key]) {
                    formData.append(key, values[key]);
                }
            });

            const response = await axios.post('http://localhost:3333/auth/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { access_token } = response.data;

            if (access_token) {
                localStorage.setItem('token', access_token);
                toast.success('Usuário criado com sucesso!', {
                    position: "top-right",
                });

                resetForm();
                setImagePreview(DefaultUser);
                router.push('/feed/logged');
                console.log("Redirected");
            } else {
                throw new Error('Token não recebido');
            }
        } catch (error) {
            toast.error('Erro ao criar usuário!', {
                position: "top-right",
            });
            console.error('Erro ao criar usuário:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleImageChange = (e, setFieldValue) => {
        const file = e.target.files[0];
        if (file) {
            setFieldValue('picture', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <main className="flex">
            <div id="blank" className="w-1/2 h-screen">
                <Image className="w-full h-full" src={Foca} alt="imagem de uma foca com computador" />
            </div>
            <div className="w-1/2 h-screen text-white bg-darkblue flex flex-col justify-evenly items-center">
                <div className="w-1/3 h-fit">
                    <h1 className="text-5xl text-center text-white">Cadastro Usuário</h1>
                </div>
                <div id="user-info" className="">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting, setFieldValue }) => (
                            <Form className="flex flex-col items-center">
                                <div className="mb-4">
                                    <label htmlFor="picture">
                                        <div className="image-container">
                                            <Image
                                                src={imagePreview}
                                                alt="Preview"
                                                className="image"
                                                width={150}
                                                height={150}
                                            />
                                        </div>
                                    </label>
                                    <input
                                        id="picture"
                                        name="picture"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleImageChange(e, setFieldValue)}
                                    />
                                </div>
                                <Field className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" name="name" placeholder="Nome" />
                                <ErrorMessage name="name" component="div" className="text-red-500" />
                                <Field className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" name="email" type="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                                <Field className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" name="password" type="password" placeholder="Senha" />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                                <Field className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" name="course" placeholder="Curso" />
                                <ErrorMessage name="course" component="div" className="text-red-500" />
                                <Field className="my-2 py-5 pr-96 rounded-xl text-black text-xl pl-4" name="departament" placeholder="Departamento" />
                                <ErrorMessage name="departament" component="div" className="text-red-500" />
                                <div className='flex gap-6'>
                                    <button type="submit" className="mt-5 bg-lightblue text-2xl py-4 px-12 rounded-lg outline" disabled={isSubmitting}>
                                        Criar conta
                                    </button>
                                    <button type="button" className="mt-5 bg-lightblue text-2xl py-4 px-12 rounded-lg outline">
                                        <Link href={"/login"}>Fazer login</Link>
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

export default RegisterForm;
