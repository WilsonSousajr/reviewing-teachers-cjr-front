import React, { Children, FormEvent } from 'react';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikValues, useFormik } from 'formik'
import { DocumentProps } from 'next/document'

function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.')
};

function initialValues (event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.')
} ;

export default function Modal ({ closeModal }) { 


    return ( 
        <> 
        <dialog>
        <div id= "popup" className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center">
                <div 
                className="bg-darkblue w-3/5 h-3/5 p-8 rounded-xl">
        
        
        
        
        <div className="fixed z-100 top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">
                            <div className="bg-verdeEscuro w-2/4 h-auto p-8 rounded-xl">
                            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                            <Form>

                                <div className="scale-150 flex justify-center">
                                    <Field 
                                        as="textarea"
                                        name="textoAvaliacao"
                                        placeholder="Texto da avaliação"
                                        className=""
                                    />
                                    <ErrorMessage name="textoAvaliacao" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                </Form>
                        </Formik>
                        <div className="flex gap-5 justify-end">
                                    <button id= 'cancel' onClick={() => closeModal(false)} type="button" className="bg-darkblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md">Cancelar</button>
                                    <button type="submit" className="bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md">Avaliar</button>
                                </div>
                                
                    </div>
                </div>
            </div>
        </div>
        </dialog>
        </>
    )
};