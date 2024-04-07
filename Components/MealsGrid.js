import { Fragment } from "react";
import Card from "./Card";
import styles from "./mealsgrid.module.css";
const { getAllMeals } = require("../query.js");

export default function MealsGrid() {
  let meals = getAllMeals();

  

  return (
    <ul className={styles.mealgrid}>
      {meals.map((meal, i) => {
        return (
          <Fragment key={i}>
            <Card data={meal} />
            <br />
          </Fragment>
        );
      })}
    </ul>
  );
}
