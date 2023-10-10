import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2>Creative Portfolio</h2>
          <p className={styles.desc}>
            Lorsqu'il dit que "ceux qui sont conduits par l'Esprit sont libres
            par rapport à la loi mosaïque," il signifie que la foi en Christ
            change fondamentalement la manière dont les croyants sont justifiés.
            Ils ne sont plus sous la condamnation de la loi, car Christ a
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.image} fill={true} src="https://plus.unsplash.com/premium_photo-1661369089329-d89031837cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="" />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h2>Creative Portfolio</h2>
          <p className={styles.desc}>
            Lorsqu'il dit que "ceux qui sont conduits par l'Esprit sont libres
            par rapport à la loi mosaïque," il signifie que la foi en Christ
            change fondamentalement la manière dont les croyants sont justifiés.
            Ils ne sont plus sous la condamnation de la loi, car Christ a
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.image} fill={true} src="https://plus.unsplash.com/premium_photo-1661369089329-d89031837cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2>Creative Portfolio</h2>
          <p className={styles.desc}>
            Lorsqu'il dit que "ceux qui sont conduits par l'Esprit sont libres
            par rapport à la loi mosaïque," il signifie que la foi en Christ
            change fondamentalement la manière dont les croyants sont justifiés.
            Ils ne sont plus sous la condamnation de la loi, car Christ a
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.image} fill={true} src="https://plus.unsplash.com/premium_photo-1661369089329-d89031837cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
