'use client'
import { useState ,useEffect} from 'react';
import styles from './slider.module.css'
const images = [
    require('../assets/burger.jpg'),
    require('../assets/macncheese.jpg'),
    require('../assets/pizza.jpg'),
    require('../assets/schnitzel.jpg')
  ]
  import Image from 'next/image'

export default function Slider(){
    const [selectedIndex , setSelectedIndex] = useState(0);
    useEffect(()=>{
        let loop = setInterval(()=>{
            setSelectedIndex(prev =>  (prev +1) % images.length)
        },1000)
        return ()=>clearInterval(loop)
    },[])
    return(
        <div className={styles.slider}>
            {images.map((img , i)=>{
                return <Image fill  key ={i} src={img} alt="food image" className={selectedIndex == i ? styles.active : ''}  />
            })}
        </div>
    )
}