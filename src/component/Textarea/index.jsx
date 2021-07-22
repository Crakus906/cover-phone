import React from "react";
import { useField } from "formik";

import "./style.scss";

export default function Textarea(props) {
  const {
    className,
    isDisabled,
    name,
    placeholder
  } = props;
  const [field, meta] = useField(name);
  
  return (
    <div className={`block-textarea ${className}`}>
      <textarea 
        className="textarea"
        id={name}
        disabled={isDisabled}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        error={!!meta.error}
        placeholder={placeholder}
      />
    </div>
    
  );
}
