/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PictureSvg, TextSvg, FillSvg } from "../../assets/icons";
import Button from "../../component/Button";
import ExpansionPanel from "../../component/ExpansionPanel";
import { allCoverSelector, caseSelector } from "../../redux/selector/selector";
import { Modal } from "../index";
import ModalAdText from "../ModalAdText";

import "./style.scss";

export default function Menu() {
    const [ show, setShow ] = useState(false);  
    const [ adTextShow, setadTextShow ] = useState(false);  
    const [ nameCover, setNameCover ] = useState("");
    const [ slug, setSlug ] = useState("");

    const caseData = useSelector(caseSelector);
    const allCoverData = useSelector(allCoverSelector);

    if(!caseData) return null;

    return (  
        <div className="menu-component " >
            <div className="title-menu" onClick={() => setShow(!show)}>
                <div>{nameCover}</div>
                <div>{slug}</div> 
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
                title="Текст"
                svg={<><TextSvg /></>}
            >
                <Button 
                    className="drop-down-border" 
                    onClick={() => setadTextShow(!adTextShow)}
                >
                    +
                </Button>
                <div className="drop-down-text">Текст</div>     
            </ExpansionPanel>
            
            <ExpansionPanel
                title="Заливка"
                svg={<><FillSvg /></>}
            />
            {show ? <Modal show={show} setShow={setShow} setNameCover={setNameCover} setSlug={setSlug}  /> : null}
            {adTextShow ? <ModalAdText setShow={setadTextShow} show={adTextShow} /> : null}
        </div>
    );
}