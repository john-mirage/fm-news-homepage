import { clsx } from "clsx";
import { ReactNode } from "react";
import classes from "./Button.module.css";

interface Props {
  children: ReactNode;
  className?: string;
  type: "button" | "submit" | "reset";
}

const Button = ({ children, className, type }: Props) => {
  return (
    <button className={clsx(classes.container, className)} type={type}>
      {children}
    </button>
  );
};

export default Button;
