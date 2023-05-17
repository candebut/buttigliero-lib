import React from 'react';
import './button.scss';

export interface ButtonProps {
  label: string;
  variant: string;
  onClick?: React.MouseEventHandler;
}

const Button = ({ label, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <div className="buttonWrapper">
      <button onClick={onClick} className={`button-component ${variant}`}>
        {label}
      </button>
    </div>
  );
};

export default Button;
