import styles from "./styles.module.css";
import classNames from "classnames";
import { useTheme } from "../theme/hooks";

const { 
  Container, 
  Content,
  Button
 } = styles;

export const Header = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
  <div className={classNames(Container, className)}>
    <div className={classNames('pageContent', Content)}>
      <button className={classNames(Button)}>Заказ</button>
      <button className={classNames(Button)} onClick={()=>setTheme('yellow')}>Смена темы</button>
    </div>
  </div>
  );
};
