import styles from "./styles.module.css";
import classNames from "classnames";

const { Container, Button } = styles;

export const Footer = ({ className }) => {
  return (
    <div className={classNames(Container, className)}>
      <div className={classNames("pageContent")}>
        <button className={classNames(Button)}>Контакты</button>
      </div>
    </div>
  );
};
