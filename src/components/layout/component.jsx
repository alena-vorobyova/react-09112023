import { Header } from "../header/component";
import { Footer } from "../footer/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const { Container } = styles;


export const  Layout = ({ children }) => {
  return (
    <div className={classNames(Container)}>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  );
};
