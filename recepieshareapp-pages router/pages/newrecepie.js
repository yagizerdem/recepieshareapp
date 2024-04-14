import { useRef, useState } from "react";
import styles from "../styles/newrecepie.module.css";
import axios from "axios";
import { useRouter } from "next/router";
export default function NewRecepie() {
  const router = useRouter();
  const [source, setsource] = useState(null);
  const ref = useRef();
  function clickHandler() {
    ref.current.click();
  }
  function onChange(e) {
    const input = e.target;
    const file = input.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        setsource(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  async function submit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const entries = [...data.entries()];
    console.log(entries);

    const title = entries[0][1];
    const summary = entries[1][1];
    const instructions = entries[2][1];
    const creator = entries[3][1];
    const creator_email = entries[4][1];
    const image = entries[5][1];

    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);

    try {
      var result = await axios.post("/api/uploadimg", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    if (result.status != 200) return;
    const extension = image.name.split(".").pop();
    try {
      var result = await axios.post("/api/upload", {
        summary,
        instructions,
        title,
        creator,
        creator_email,
        image: extension,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    // redirect on server
    goBack();
  }
  function goBack() {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <form encType="multipart/form-data" onSubmit={(e) => submit(e)}>
        <label>title</label>
        <input name="title" placeholder="enter title" maxLength={14}></input>
        <label>summary</label>
        <input
          name="summary"
          placeholder="enter summary"
          maxLength={150}
        ></input>
        <label> instructions</label>
        <textarea
          name="instructions"
          placeholder="enter instructions"
        ></textarea>
        <label>creator name</label>
        <input name="creator" placeholder="enter name" maxLength={14}></input>
        <label>creator mail</label>
        <input name="creator_email" placeholder="enter mail"></input>
        <div className={styles.imgframe}>
          {source && <img src={source} alt="preview ... "></img>}
        </div>
        <input
          name="image"
          type="file"
          ref={ref}
          hidden
          accept="image/png, image/jpeg , image/jpg"
          onChange={(e) => onChange(e)}
        ></input>
        <button
          onClick={clickHandler}
          className={styles.imgselection}
          type="button"
        >
          select image{" "}
        </button>
        <button type="submit">submit form</button>
      </form>
      <button className={styles.gobackbtn} onClick={goBack}>
        go back ...
      </button>
    </div>
  );
}
