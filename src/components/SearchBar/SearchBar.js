import React, { useRef } from "react";
import styles from "./SearchBar.module.css";
import TextField from "@material-ui/core/TextField";
import searchIcon from "../../assets/searchIcon.png";

const Input = ({ search, handleInputChange }) => {
  const inputRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <img
        src={searchIcon}
        alt="magnification glass search icon"
        className={styles.icon}
        onClick={() => inputRef.current.focus()}
      />
      <TextField
        className={styles.textField}
        value={search}
        inputRef={inputRef}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
