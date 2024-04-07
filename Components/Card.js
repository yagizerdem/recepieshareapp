'use client'
import styles from './card.module.css'
import Link from 'next/link'
import {  useEffect, useState } from 'react'
import Spinner from './Spinner'

export default function Card({data}){
    const [img , setimg] = useState(null)
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch(`api/meals?image=${data.image}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          let bufferdata = JSON.parse(data.data)
          bufferdata = bufferdata.data
          bufferdata = new  Buffer.from(bufferdata).toString("base64")
          setimg(bufferdata)
        }).finally(()=>{
            setLoading(false)
        })
      },[data.image])
      

    return(
        <div className={styles.card}>
            <div className={styles.image}>
                {loading?<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'200px'}}><Spinner/></div> :<img src={`data:image/*;base64,${img}`} alt={"meal img"}></img>}
            </div>
            <hr/>
            <p>
                {data.summary.substring(0,100) }
                {(data.summary.length > 100 ? " ..." : '')}
            </p>
            <div className={styles.row}>
                <span>{data.creator}</span>
                <span>{data.creator_email}</span>
            </div>
            <button className={styles.button}>
                <Link href={`/${data.slug}/?image=${data.image}&id=${data.id}`}>see recepie</Link>
            </button>
        </div>
    )
}