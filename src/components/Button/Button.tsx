import React from "react";
import { constants } from '../../constants/constants';
import './Button.scss';

export interface ButtonProps {
  label: string;
  variant: string;
}

const Button = ({label, variant = constants.primary}: ButtonProps) => {
  return <div className='button-wrapper'><button className={`button-component__${variant}`}>{label}</button></div>;
};

export default Button;