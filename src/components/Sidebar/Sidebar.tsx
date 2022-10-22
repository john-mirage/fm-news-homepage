import Navigation from "@components/Navigation";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.overlay}>
      <aside className={classes.surface}>
        <Navigation />
      </aside>
    </div>
  );
};

export default Sidebar;
