import { getAllRecepie, getById } from "@/helpers/db-util";
import styles from "../styles/description.module.css";
import { useRouter } from "next/router";
export default function Description({ recepie }) {
  const router = useRouter();
  function handler() {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <img src={recepie.image} className={styles.img}></img>
      <hr style={{ width: "80%", margin: "20px auto" }} />
      <p className={styles.line}>{recepie.instructions}</p>
      <button onClick={handler} className={styles.btn}>
        go back ...{" "}
      </button>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const id = params.id;
  let recepie = getById(id);
  return { props: { recepie } };
}
export async function getStaticPaths() {
  const allid = getAllRecepie().map((item) => item.id);
  console.log(allid);
  return {
    paths: allid.map((id) => {
      return {
        params: {
          id: id + "",
        },
      };
    }),
    fallback: false, // false or "blocking"
  };
}
