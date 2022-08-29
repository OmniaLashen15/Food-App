import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} 
            {...props.input} //ensure that other attributes is set as id
            ref={ref}
            />
        </div>
    );
});

export default Input;