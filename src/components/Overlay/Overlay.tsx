import classes from "./Overlay.module.css";
import { motion } from "framer-motion";

interface Props {
  closeSidebar: () => void;
}

const Overlay = ({ closeSidebar }: Props) => {
  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      }}
      onClick={closeSidebar}
    ></motion.div>
  );
};

export default Overlay;
