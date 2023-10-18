import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import styles from '../home/home.module.css';

export const Home = () => {
  const [recipesList, setRecipesList] = useState([]);


     //rutas de informacion:
     const recipesCollectionRef= collection(db, "recipes"); 

  useEffect(()=>{
    //funcion para traernos las propiedades
    const getRecipesList = async () => {
      try {
        const data = await getDocs(recipesCollectionRef);
        const filterData = await Promise.all(
          data.docs.map(async (doc) => {
            const propertyData = doc.data();
            return {
              ...propertyData,
              id: doc.id
            };
          })
        );
        console.log(filterData);
        setRecipesList(filterData);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipesList();
  }, []);

  return (
    <>
    <Navbar/>
    <div className={styles.homeContainer}>
      <h1>Platos actuales de Tutto Tano</h1>
      {recipesList.map((r) => (
        <div className={styles.card} key={r.id}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJELtRnNrfKQMYzrvDbOYytgJQS9hMCXp-_fH15GAGJA&s" alt="Imagen del plato" className={styles.cardImage} />
          <h2>{r.name}</h2>
          <p>{r.tittle}</p>
          <p>{r.subtittle}</p>
        </div>
      ))}
    </div>
    </>
  )
}
