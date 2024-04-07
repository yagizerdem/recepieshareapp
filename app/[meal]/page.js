"use client";
import Image from 'next/image'

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

export default function Meal() {
  const searchParams = useSearchParams()
  const search = searchParams.get('image')
  const [img , setimg] = useState(null)   // img buffer
 

    // struggle is real :)
    useEffect(()=>{
      fetch(`api/meals?image=${search}`)
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
      });
  
    },[search])



  return <div>
    <img src={`data:image/*;base64,${img}`} alt={"meal img"}></img>
  </div>;
}
