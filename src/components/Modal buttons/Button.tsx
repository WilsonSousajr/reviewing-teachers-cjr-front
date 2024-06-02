import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';

<div className="fixed z-100 top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">
                    <div className="bg-verdeEscuro w-2/4 h-auto p-8 rounded-xl">
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            <Form>
                                <div className="">
                                    <Field
                                        as="textarea"
                                        name="textoComentario"
                                        placeholder="Texto da comentário"
                                        className=""
                                    />
                                    <ErrorMessage name="textoComentario" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" onClick={onClose} className="">Cancelar</button>
                                    <button type="submit" className="">Enviar</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>