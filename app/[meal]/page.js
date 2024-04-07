"use client";
import styles from "./meal.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Spinner from "@/Components/Spinner";
import { useRouter } from "next/navigation";

export default function Meal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("image");
  const id = searchParams.get("id");
  const [img, setimg] = useState(null); // img buffer
  const [mealData, setMealData] = useState(null);
  const [imgloading, setImgLoading] = useState(true);

  // struggle is real :)
  useEffect(() => {
    setImgLoading(true);
    fetch(`api/meals?image=${search}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let bufferdata = JSON.parse(data.data);
        bufferdata = bufferdata.data;
        bufferdata = new Buffer.from(bufferdata).toString("base64");
        setimg(bufferdata);
      })
      .finally(() => {
        setImgLoading(false);
      });
  }, [search]);

  useEffect(() => {
    fetch(`api/recepie?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMealData(data.data);
      });
  }, [id]);

  function goBack() {
    router.push("/", { scroll: false });
  }
  return (
    <div className={styles.card}>
      {imgloading ? (
        <Spinner />
      ) : (
        <img src={`data:image/*;base64,${img}`} alt={"meal img"}></img>
      )}
      {mealData && <p className={styles.title}>{mealData.title}</p>}
      <p className={styles.recepie}>{mealData && mealData.instructions}</p>
      <button className={styles.btn} onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>
    </div>
  );
}
