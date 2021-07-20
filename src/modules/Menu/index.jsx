/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PictureSvg, TextSvg, FillSvg } from "../../assets/icons";
import Button from "../../component/Button";
import ExpansionPanel from "../../component/ExpansionPanel";
import { allCoverSelector, caseSelector } from "../../redux/selector/selector";
import { Modal } from "../index";

import "./style.scss";

export default function Menu() {
    const [ show, setShow ] = useState(false);  
    const [ nameCover, setNameCover ] = useState("");

    const caseData = useSelector(caseSelector);
    const allCoverData = useSelector(allCoverSelector);

    if(!caseData || !allCoverData) return null;

    return (  
        <div className="menu-component " >
            <div className="title-menu" onClick={() => setShow(!show)}>
                <div>{nameCover}</div>
                <div>{allCoverData[0].label}</div> 
            </div>
            <ExpansionPanel
                title="Картинки"
                svg={<><PictureSvg /></>}
            >
                <Button className="drop-down-border animation-pulse">
                    +
                </Button> 
                <div className="drop-down-text">картинки</div>     
            </ExpansionPanel>
            <ExpansionPanel
                title="Текс"
                svg={<><TextSvg /></>}
            />
            <ExpansionPanel
                title="Заливка"
                svg={<><FillSvg /></>}
            />
            {show ? <Modal show={show} setShow={setShow} setNameCover={setNameCover}  /> : null}
        </div>
    );
}