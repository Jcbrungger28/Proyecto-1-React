import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {

    const tituloComponet = 'Añadir pelicula';

    const [peliState, setPeliState] = useState({
        titulo: '',
        description: ''
    })

    const {titulo, description} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //Conseguir los datos del formulario
        let target = e.target;
        let titulo = e.target.titulo.value; 
        let description = e.target.description.value;

        //Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            description,
        };
  
        //Guardar estado
           setPeliState(peli)

           //Actualizar el estado del estado principal
           setListadoState(elementos => {
              return [peli, ...elementos]
           });

               //Guardar en el almacenamiento local
           GuardarEnStorage('pelis', peli);
    }

  return (
    <div className="add">
            <h3 className="title">{tituloComponet}</h3>

            <strong>
              {(titulo && description) && 'has creado la pelicula: '+titulo}
            </strong>

         <form  onSubmit={conseguirDatosForm}> 
            <input type="text"
                   id='titulo'
                   placeholder="Titulo"
                   name='titulo'
             />
            <textarea id='description'
                       name='description'
                       placeholder="Descripcion"

             ></textarea>                
            <input type="submit"
                   id='save'
                   value="Guardar"/>
         </form>
    </div>
  )
}
 
export default Crear
