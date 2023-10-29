// components/CustomInput.js
import React from 'react';
import styles from "./custom.module.css"

const CustomInput = ({ type, name, placeholder, value, onChange, error, className }) => (
  <>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className} // Apply the custom class to the input element
    />
    {error && <span className={styles.error}>{error}</span>}
  </>
);

export default CustomInput;