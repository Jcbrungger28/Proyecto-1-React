import React from 'react'

const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

  const titulo_componente = 'Editar pelicula';

const guardarEdicion = (e, id) => {
  e.preventDefault()
   
  //conseguir el target del evento

  let target = e.target

  console.log(target)

  //Buscar el indice del objeto de la pelicula a actualizar
  const pelis_almacenadas = conseguirPeliculas();
     const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

    // crear objeto con el de id ese indice, con el titulo y descripcion del formulario
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      description: target.descripcion.value
    };

    //Actualizar el elemento con ese indice

    pelis_almacenadas[indice] = peli_actualizada;

    //Guardar el nuevo array de objeto en el localStorage
localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

    // y actulizar estados
    setListadoState(pelis_almacenadas)
    setEditar(0);
}

  
  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <hr/>

      <form onSubmit={ e => guardarEdicion(e, peli.id)}>
        <input type='text'
               name='titulo'
               className='titulo_editado'
               defaultValue={peli.titulo} />
            
          <textarea
               name='descripcion'
               defaultValue={peli.description}
               className='descripcion_editada' />

          <input type='submit' className='editar' value='Actualizar'/>

      </form>
    </div>
  )
}

export default Editar;
