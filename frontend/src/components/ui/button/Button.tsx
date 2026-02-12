import classes from "./Button.module.scss";
import type React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type: "submit" | "type";
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
