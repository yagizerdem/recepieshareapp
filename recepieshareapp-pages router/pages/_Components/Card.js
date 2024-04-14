"use client";
import useSWR from "swr";
import styles from "../../styles/card.module.css";
import Spinner from "./Spinner";
const fetcher = (url) => fetch(url).then((r) => r.json());
export default function Card({ meal, onClick }) {
  const { data, error, isLoading } = useSWR(`/api/${meal?.id}`, fetcher);
  function handle() {
    onClick(meal.id);
  }
  return (
    <div className={styles.card}>
      <button className={styles.btn} onClick={handle}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      {isLoading ? (
        <Spinner />
      ) : !error ? (
        <img src={data.img} alt="meal image"></img>
      ) : (
        <p>img not found ...</p>
      )}
      <p className={styles.title}>{meal?.title}</p>
      <p className={styles.summary}>{meal?.summary}</p>
      <hr style={{ width: "80%", display: "block", margin: "5px auto" }} />
      <div className={styles.row}>
        <span>{meal?.creator}</span>
        <span>{meal?.creator_email}</span>
      </div>
    </div>
  );
}
