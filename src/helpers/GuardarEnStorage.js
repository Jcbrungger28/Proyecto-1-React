 
 
 export const GuardarEnStorage = ( clave, elemento ) => {

    //conseguir los elemento que ya tenemos en el localstorage
    let elementos =  JSON.parse(localStorage.getItem(clave));

    console.log(elementos)
    //comprobar si es un array
    if(Array.isArray(elementos)){
      // Añadir dentro del array un elemento nuevo
      elementos.push(elemento);
    }else{
      //Crear un array con una peli nueva
      elementos = [elemento];
    }

    console.log(elementos)

    //Guardar en el localStorage

    localStorage.setItem(clave, JSON.stringify(elementos))

    //Devolver Objeto guardado

    return elemento;
  } 