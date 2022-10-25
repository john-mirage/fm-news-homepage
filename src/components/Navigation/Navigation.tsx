import classes from "./Navigation.module.css";
import navigationItems from "@data/navigation.json";
import { clsx } from "clsx";
import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  direction?: "row" | "column";
  wantFocus?: boolean;
}

const Navigation = ({
  className,
  direction = "column",
  wantFocus = false,
}: Props) => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!wantFocus) return;
    if (navRef.current) {
      const firstLink = navRef.current.querySelector("a");
      firstLink?.focus();
    }
  }, []);

  return (
    <nav ref={navRef} className={className}>
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
