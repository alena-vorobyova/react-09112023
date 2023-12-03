import styles from "./styles.module.css";
import classNames from "classnames";

const { Container } = styles;

export const Footer = ({ className }) => {
  return <div className={classNames(Container, className)}></div>;
};
