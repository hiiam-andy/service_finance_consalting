import React from "react";
import styles from "./MyButton.module.css";

export default function MyButton(props: any) {
  return (
    <button className={styles.myBtn} {...props}>
      {props.children}
    </button>
  );
}
