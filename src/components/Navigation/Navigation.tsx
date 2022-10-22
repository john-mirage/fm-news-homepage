import classes from "./Navigation.module.css";
import { navigationItems } from "@constants/navigation";
import { clsx } from "clsx";

interface Props {
  className?: string;
  direction?: "row" | "column";
}

const Navigation = ({ className = "", direction = "column" }: Props) => {
  return (
    <nav className={className}>
      <ul
        className={clsx(
          direction === "row" && classes.rowList,
          direction === "column" && classes.columnList
        )}
      >
        {navigationItems.map((navigationItem) => (
          <li key={navigationItem.name} className={classes.item}>
            <a className={classes.link} href={navigationItem.path}>
              {navigationItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
