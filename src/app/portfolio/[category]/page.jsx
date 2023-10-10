import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { items } from "./data";
import { notFound } from "next/navigation";

// Get all data for a particular category
const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h2>{item.title}</h2>
            <p className={styles.desc}>
            {item.desc}
            </p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
