import React,{useState,useEffect} from 'react';

function useLocalStorage(itemName,initialValue) { //custom hook de de localStorage
    //creamos un estdo para errors
    const [error,setError] = useState(false);
    //creamos un estado para saber cuando se ha cargado el valor
    const [loading,setLoading] = useState(true);
    //creamos un estado para el valor
    const [item, setitem] = useState(initialValue); //por defecto tiene los valores guardados en localStorage

    useEffect(() => {
        //simulamos una carga de datos y un delay de 1 segundo
        setTimeout(() => {
            //manejamos los errorres con un try catch
            try {
                const localStoatageItem = localStorage.getItem(itemName);//obtener el item itemName de localStorage
                let parsedItem;
              
                if(localStoatageItem){//verificamos si existe un item en localStorage
                  //existe un item en localStorage
                  parsedItem = JSON.parse(localStoatageItem);//parsear el string a objeto
                }else{
                  // si no existe un item en localStorage
                  // creamos un item en localStorage
                  localStorage.setItem(itemName,JSON.stringify(initialValue));
                  // pasamos un array vacio
                  parsedItem = initialValue;
                }
                setitem(parsedItem);//seteamos el item
                setLoading(false);//seteamos loaded a false

            }catch(error){
                //si hay un error
                setError(true);
            }
        },3000);
    },[]);//el array vacio indica que solo se ejecuta una vez
  
    const Saveitem = (newitem) => {
        try{
            //actualizamos el state de todos
            //guardamos el nuevo array en localStorage
            const stringifieditem = JSON.stringify(newitem);
            localStorage.setItem(itemName,stringifieditem);
            setitem(newitem);
        }catch(error){
            //si hay un error
            setError(true);
        }
    }
  
    return {
    item,
    Saveitem,
    loading,
    error
    };
  }
export {useLocalStorage};