import Navigation from "@components/Navigation";
import classes from "./Sidebar.module.css";
import { motion } from "framer-motion";
import IconButton from "@components/IconButton";

interface Props {
  closeSidebar: () => void;
}

const Sidebar = ({ closeSidebar }: Props) => {
  return (
    <motion.aside
      className={classes.container}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      }}
    >
      <IconButton
        className={classes.button}
        label="close the sidebar"
        iconShape="#icon-close-sidebar"
        iconSize="2rem"
        onClick={closeSidebar}
      />
      <Navigation />
    </motion.aside>
  );
};

export default Sidebar;
