import classes from "./Header.module.css";

interface Props {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
}

const Header = ({ sidebarIsOpen, toggleSidebar }: Props) => {
  return (
    <header className={classes.container}>
      <h1 className={classes.title}>News homepage</h1>
      <svg className={classes.logo} aria-hidden="true">
        <use href="#logo" />
      </svg>
      <button
        className={classes.button}
        type="button"
        aria-label="open navigation menu"
        onClick={toggleSidebar}
      >
        <svg className={classes.buttonIcon}>
          <use href={`#icon-${sidebarIsOpen ? "menu-close" : "menu"}`} />
        </svg>
      </button>
    </header>
  );
};

export default Header;
