import { Fragment } from "react";
import Slider from "./Slider";
import styles from "./header.module.css";
export default function Header() {
  return (
    <Fragment>
      <h1 className={styles.h1}>NEXT food app</h1>
      <div className={styles.header}>
        <Slider></Slider>
        <div className={styles.container}>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <br />
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
