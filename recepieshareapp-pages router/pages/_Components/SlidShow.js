"use client";
import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import Spinner from "./Spinner";
import styles from "../../styles/slideshow.module.css";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function SlideShow() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { data, error, isLoading } = useSWR("/api/image", fetcher);
  useEffect(() => {
    var loop = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % data.images.length);
    }, 1000);
    return () => clearInterval(loop);
  }, [selectedIndex, data?.images]);

  if (error) {
    return <p>error whielst loading ... </p>;
  }
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if (data.images) {
    return (
      <Fragment>
        <div className={styles.container}>
          {data.images.map((item, i) => {
            return (
              <img
                src={item}
                key={i}
                className={i == selectedIndex ? styles.active : styles.passive}
              ></img>
            );
          })}
        </div>
      </Fragment>
    );
  }
  return <p>error whielst loading ... </p>;
}
