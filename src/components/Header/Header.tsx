import Navigation from "@components/Navigation";
import IconButton from "@components/IconButton";
import classes from "./Header.module.css";
import { clsx } from "clsx";

interface Props {
  className?: string;
  openSidebar: () => void;
}

const Header = ({ className = "", openSidebar }: Props) => {
  return (
    <header className={clsx(className, classes.container)}>
      <h1 className={classes.title}>News homepage</h1>
      <svg className={classes.logo} aria-hidden="true">
        <use href="#logo" />
      </svg>
      <IconButton
        className={classes.button}
        label="open the sidebar"
        iconShape="#icon-open-sidebar"
        iconSize="2.5rem"
        onClick={openSidebar}
      />
      <Navigation className={classes.navigation} direction="row" />
    </header>
  );
};

export default Header;
