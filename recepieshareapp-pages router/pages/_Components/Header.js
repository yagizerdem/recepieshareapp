import styles from "../../styles/header.module.css";
import SlideShow from "@/pages/_Components/SlidShow";
import { Fragment } from "react";
export default function Header() {
  return (
    <Fragment>
      <p className={styles.title}>Recepie Sharing App</p>
      <div className={styles.container}>
        <SlideShow></SlideShow>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. Its a place to discover new dishes, and to
          connect with other food lovers. NextLevel Food is a place to discover
          new dishes, and to connect with other food lovers.
        </p>
      </div>
    </Fragment>
  );
}
