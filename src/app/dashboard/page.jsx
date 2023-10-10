"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'



const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    // fetch data everywhere
    const getData=async()=>{
      setIsLoading(true)
    const res  = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      cache:"no-store"
    });
  
    if(!res.ok){
      setErr(true);
    } 
    
    setData(res.json())
    isLoading(false)
  };

  getData()
  
  },[])
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard