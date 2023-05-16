import React from "react";
import { constants } from "../../constants/constants";
import "../../styles/scss/_button.scss";

export interface ButtonProps {
  label: string;
  variant: string;
  onClick?: React.MouseEventHandler;
}

const Button = ({ label, variant = constants.primary }: ButtonProps) => {
  const onClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="button-wrapper">
      <button className={`button-component__${variant}`}>{label}</button>
    </div>
  );
};

export default Button;
