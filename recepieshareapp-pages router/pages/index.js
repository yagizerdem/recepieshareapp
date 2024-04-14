import { Fragment } from "react";
import Header from "./_Components/Header";
import styles from "../styles/home.module.css";
import { getAllRecepie } from "@/helpers/db-util";
import Card from "./_Components/Card";
import { useRouter } from "next/navigation";

export default function Home({ recepies }) {
  const router = useRouter();
  function clickHandler(id) {
    router.push(`/${id}`);
  }
  function onClickHandler_() {
    router.push("newrecepie");
  }
  return (
    <Fragment>
      <Header></Header>
      <div className={styles.container}>
        {recepies &&
          recepies.map((item, i) => {
            return (
              <Card
                key={i}
                meal={item}
                onClick={(id) => clickHandler(id)}
              ></Card>
            );
          })}
      </div>
      <button className={styles.btn} onClick={onClickHandler_}>
        <i class="fa-solid fa-pen"></i>
      </button>
    </Fragment>
  );
}

export async function getStaticProps() {
  const recepies = getAllRecepie();
  return { props: { recepies }, revalidate: 10 };
}
