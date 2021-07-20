import React from "react";
import { useState } from "react";
import { AngleArrowSvg } from "../../assets/icons";

import "./style.scss";

export default function ExpansionPanel(props) {
    const [dropDown, setDropDown] = useState(false);
    const {
        title, svg, children,
    } = props;

    return (  
        <div className="expansion-panel">
            <div onClick={() => setDropDown(!dropDown)} className="menu-btn">
                <div className="block-title">
                    <span className="svg">{svg}</span>
                    <span className="text">{title}</span>
                </div>
                <AngleArrowSvg />
            </div>
            <div className={dropDown ? "dropdown-child-active" : "dropdown-child"}>
                {children}
            </div>
        </div>
    );
}