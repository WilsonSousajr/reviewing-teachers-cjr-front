import React from 'react';
import {Formik} from 'formik';

const onclose = () =>{
    window.close();
};

     <div className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue bg-opacity-50 flex justify-center items-center">
        <div className="bg-darkblue w-3/5 h-3/5 p-8 rounded-xl">

                        <form>

                             <button onClick={onclose} type="button" className="bg-darkblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md">Cancelar</button>
                             <button type="submit" className="bg-lightblue text-white text-xl py-1 px-8 rounded-xl outline outline-white outline-2 shadow-black shadow-md">Avaliar</button>
                         </form>
            </div>
        </div>