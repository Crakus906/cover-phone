import React from "react";
import Select from "react-select";

import "./style.scss";

export default function RSelect(props) {
    const { 
        options, onChange
    } = props;
    return (  
        <div className="selector-wrapper">
            <Select options={options} onChange={onChange} />

        </div>
    );
}