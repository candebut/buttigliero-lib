import React from "react";
import { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import './Button.scss';

function Button({
    type = 'button',
    variant = 'primary',
    size = 'm',
    weight = '500',
    options = [],
    children,
    disabled,
    ...props
}) {
    const [open, setOpen] = useState(false);
    const drop = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handlePageClick);
        return () => {
            document.removeEventListener('mousedown', handlePageClick);
        };
    });

    const handlePageClick = (e) => {
        if (drop && !drop?.current?.contains(e.target) && open) {
            setOpen(false);
        }
    };

    const onClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };


    return (
        <div className="button-wrapper" ref={drop}>
            <button
                className={`button-${variant}`}
                type={type}
                onClick={onClick}
                weight={weight}
                disabled={disabled}
                size={size}
      
                {...props}
            >
                {children}
     
            </button>
 
        </div>
    );
}

Button.propTypes = {
    type: propTypes.string,
    variant: propTypes.string,
    size: propTypes.oneOf(['s', 'm']),
    children: propTypes.oneOfType([propTypes.node, propTypes.string]),
    disabled: propTypes.bool,
};

export default Button;
