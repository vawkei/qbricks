import classes from "./Button.module.scss";
import type React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
  disabled?: boolean
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
