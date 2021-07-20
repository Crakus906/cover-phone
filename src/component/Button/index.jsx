import React from "react";

import "./style.scss";

export default function Button(props) {
    const {
        className,
        children
    } = props;

    return (  
        <div className={`button ${className}`}>
            {children}
        </div>
    );
}