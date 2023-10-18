import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../../firebase/config';
import { Navbar } from '../../components/Navbar/Navbar';
import styles from '../create/create.module.css';

export const Create = () => {
    const [newRecipeName, setNewRecipeName] = useState("");
    const [newRecipeTittle, setNewRecipeTittle] = useState("");
    const [newRecipeSubtittle, setNewRecipeSubtittle] = useState(false);
    const [newRecipeType, setNewRecipeType] = useState([]);
  
   //rutas de informacion:
   const recipesCollectionRef= collection(db, "recipes"); 
 
   //funcion para crear propiedades
   const onSubmitProp = async () => {
     try {
        
       
         await addDoc(recipesCollectionRef, {
           name: newRecipeName,
           tittle: newRecipeTittle,
           subtittle: newRecipeSubtittle,
           type: newRecipeType,
           userId: auth?.currentUser?.uid,
         });
     
 
       // se limpia el estado 
        setNewRecipeName("");
        setNewRecipeTittle("");
        setNewRecipeSubtittle("")
        setNewRecipeType([])
       alert('La receta se cargo con exito');
     } catch (error) {
       console.log(error)
     }
   };
    return (
      <>
      <Navbar />
      <div className={styles.createContainer}>
      <h1>Crea el plato</h1>
      <input
        className={styles.formInput}
        placeholder="Nombre..."
        onChange={(e) => setNewRecipeName(e.target.value)}
      ></input>
      <input
        className={styles.formInput}
        placeholder="Título..."
        onChange={(e) => setNewRecipeTittle(e.target.value)}
      ></input>
      <input
        className={styles.formInput}
        placeholder="Especificaciones..."
        onChange={(e) => setNewRecipeSubtittle(e.target.value)}
      ></input>
      <select
        className={styles.formSelect}
        value={newRecipeType}
        onChange={(e) => setNewRecipeType(e.target.value)}
      >
        <option value="">Seleccionar tipo</option>
        <option value="antipasti">ANTIPASTI (minutas)</option>
        <option value="insalati">INSALATI (minutas)</option>
        <option value="primopiatto">PRIMO PIATTO</option>
        <option value="pastaalforno">PASTA AL FORNO</option>
        <option value="pastafresca">PASTA FRESCA</option>
        <option value="pastaripiena">PASTA RIPIENA</option>
      </select>
      <button className={styles.createButton} onClick={onSubmitProp}>
        Crear Receta
      </button>
    </div>
      </>
  )
}
