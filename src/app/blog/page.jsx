import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

// fetch data
// async function getDate(){
//   const res  = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if(!res.ok){
//     throw new Error("Something went wrong")
//   }

//   return res.json();
// }
// fetch data and revalidate every 10 seconds
// async function getDate(){
//   const res  = await fetch("https://jsonplaceholder.typicode.com/posts",{
//     next:{revalidate:10}
//   });

//   if(!res.ok){
//     throw new Error("Something went wrong")
//   }

//   return res.json();
// }

// fetch data everywhere
async function getDate(){
  const res  = await fetch("https://jsonplaceholder.typicode.com/posts",{
    cache:"no-store"
  });

  if(!res.ok){
    throw new Error("Something went wrong")
  } 

  return res.json();
} 
const Blog = async() => {

  const data = await getDate()
  return (
    <div className={styles.mainContainer}>
      {data.map(item=> (
         <Link key={item.id} href="/blog/testId" className={styles.container}>
         <div className={styles.item}>
           <div className={styles.imgContainer}>
             <Image
               className={styles.img}
               fill={true}
               src="https://plus.unsplash.com/premium_photo-1661369089329-d89031837cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
               alt=""
             />
           </div>
           <div className={styles.content}>
             <h1 className={styles.title}>{item.title}</h1>
             <p className={styles.desc}>{item.body}</p>
           </div>
         </div>
       </Link>

      ))}
     
    </div>
  );
};

export default Blog;
