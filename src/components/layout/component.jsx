import { Header } from "../header/component";
import { Footer } from "../footer/component";

import styles from "./styles.module.css";
import classNames from "classnames";
import { useTheme } from "../theme/hooks";

const { Container, YellowTheme } = styles;

export const  Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
      <div className={classNames(Container)}>
        <Header />
        <main className={classNames({[YellowTheme]: theme ==='yellow'} )}>
          { children }
        </main>
        <Footer />
      </div>

  );
};
