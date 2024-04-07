'use client'
import { useEffect, useRef, useState } from "react";
import styles from "./forum.module.css";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify";
import { useFormState } from 'react-dom';
import { ShareMeal } from "@/shareMeal";


export default function Forum() {
    const router = useRouter()
    const formref = useRef()
    const [imgsrc , setimgsrc] = useState(null)
    const ref = useRef()
    const success = (msg) => toast.success(msg);
    const error = (msg) => toast.error(msg);
    function selectImg(){
        ref.current.click()
    }
    function previewimg(e){
        const [file] = ref.current.files
        if(file){
            const src =  URL.createObjectURL(file)
            setimgsrc(src)
        }
    }
    const [state, formAction] = useFormState(ShareMeal, { message: null });

    useEffect(()=>{
        const msg = state.message
        if(msg){
            error(msg)
        }
    },[state])

  return (
    <form action={formAction}>
      <div className={styles.container}>
        <label>title</label>
        <input type="text" name="title" maxLength={20}></input>
        <label>summary</label>
        <textarea name="summary"></textarea>
        <label>instructions</label>
        <textarea
          name="instructions"
          className={styles.instructions}
        ></textarea>
        <label>creator name</label>
        <input type="text" name="creator" maxLength={20}></input>
        <label>creator email</label>
        <input type="text" name="creatoremail"></input>
        <label>select image</label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className={styles.fileinput}
          ref={ref}
          onChange={previewimg}
          name="image"
        ></input>
        <button type="button" className={styles.btnfile} onClick={selectImg}>
          select file
        </button>
        <label>img preview</label>
        <div className={styles.preview}>
            {!imgsrc ? <p>no img selected</p> : <img src={imgsrc}></img>}
        </div>
        <label>submit</label>
        <button type="submit" className={styles.btnsubmit}>submit</button>
      </div>
    </form>
  );
}
