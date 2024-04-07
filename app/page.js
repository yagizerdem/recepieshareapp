import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import Slider from "@/Components/Slider";
import MealsGrid from "@/Components/MealsGrid";
import Header from "@/Components/Header";


export default function Home() {

  

  return (
    <Fragment>
      <Header></Header>
      <MealsGrid></MealsGrid>
    </Fragment>
  );
}
