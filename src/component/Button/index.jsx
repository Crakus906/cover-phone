import React from "react";

import "./style.scss";

export default function Button(props) {
    const {
        className,
        children,
        onClick
    } = props;

    return (  
        <button
            className={`button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}