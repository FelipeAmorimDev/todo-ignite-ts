import styles from "./Header.module.css";

import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/index.html">
        <img src={logo} alt="logo" width='126' height='48'/>
      </a>
    </header>
  );
};
