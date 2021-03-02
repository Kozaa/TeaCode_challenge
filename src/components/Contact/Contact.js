import React from "react";
import styles from "./Contact.module.css";
import Checkbox from "@material-ui/core/Checkbox";

const Contact = ({
  id,
  first_name,
  last_name,
  email,
  avatar,
  handleContactClick,
  selected,
}) => (
  <div id={id} className={styles.wrapper} onClick={handleContactClick}>
    <img src={avatar} className={styles.avatar} alt="contact avatar" />
    <div className={styles.username}>
      {first_name} {last_name}
    </div>
    <Checkbox checked={selected.includes(id)} />
    <div className={styles.email}>{email}</div>
  </div>
);

export default Contact;
