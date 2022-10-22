import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.overlay}>
      <aside className={classes.surface}></aside>
    </div>
  );
};

export default Sidebar;
