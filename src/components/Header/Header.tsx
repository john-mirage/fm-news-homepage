import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.container}>
      <h1 className={classes.title}>News homepage</h1>
    </header>
  );
};

export default Header;
