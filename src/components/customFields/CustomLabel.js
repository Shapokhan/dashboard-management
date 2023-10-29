// components/CustomLabel.js
import React from 'react';

const CustomInput = ({ className, htmlFor, label }) => (
  <>
   <label 
    className={className} 
    htmlFor={htmlFor}>{label}</label>
  </>
);

export default CustomInput;