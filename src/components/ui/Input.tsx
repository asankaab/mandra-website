import React from 'react';
import styles from "./input.module.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input: React.FC<InputProps> = ({ type = 'text', ...props }) => {
    return (
        <input className={styles.input} type={type} {...props} />
    );
};

export default Input;