import React from "react";
import PropTypes from 'prop-types';
import '../css/tailwind.css';

export const Button =({primary, label, color, backgroundColor, ...props}) => {
    const mode = primary ? 'btn-primary' : 'btn-secondary';
    return (
        <button type="button"
        className={['btn', mode].join(' ')} 
        style={backgroundColor && {backgroundColor} }
        {...props}
        >
            {label}
        </button>
    );
};

Button.proptypes = {
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    onClick: undefined,
  };
  