import React from "react";

// style
import styles from "./Todo.module.css";

const todo = ({ date, info }) => {
  return (
    <div className={styles.container}>
      <p>{date}</p>
      <div>{info}</div>
    </div>
  );
};

export default todo;
