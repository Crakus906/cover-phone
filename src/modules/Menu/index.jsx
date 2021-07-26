/* eslint-disable react/jsx-key */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { PictureSvg, TextSvg, FillSvg } from "../../assets/icons";
import Button from "../../component/Button";
import ExpansionPanel from "../../component/ExpansionPanel";
import ScrollableList from "../../component/ScrollableList";
import { allCoverSelector, caseSelector } from "../../redux/selector/selector";
import { Modal } from "../index";
import ModalAdText from "../ModalAdText";

import "./style.scss";

export default function Menu() {
    const [ show, setShow ] = useState(false);  
    const [ adTextShow, setadTextShow ] = useState(false);  

    const [ file, setFile ] = useState([]);
    const [ text, setText ] = useState([]);

    const [ nameCover, setNameCover ] = useState("");
    const [ slug, setSlug ] = useState("");

    const caseData = useSelector(caseSelector);
    
    console.log(file, text);

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
                <ScrollableList file={file}>
                    {/* <Button className="drop-down-border animation-pulse">
                        +
                    </Button>  */}
                    <label>
                        <input type="file" onChange={(e) => setFile([...file, e.target.files[0]])}/>
                        <span>+</span>
                    </label>
                </ScrollableList>
                <div className="drop-down-text">картинки</div>     
            </ExpansionPanel>
            <ExpansionPanel
                title="Текст"
                svg={<><TextSvg /></>}
            >
                <ScrollableList text={text}>
                    <Button 
                        className="drop-down-border" 
                        onClick={() => setadTextShow(!adTextShow)}
                    >
                        +
                    </Button>
                </ScrollableList>
                
                <div className="drop-down-text text">Текст</div>     
            </ExpansionPanel>
            
            <ExpansionPanel
                title="Заливка"
                svg={<><FillSvg /></>}
            />
            {show ? <Modal show={show} setShow={setShow} setNameCover={setNameCover} setSlug={setSlug}  /> : null}
            {adTextShow ? <ModalAdText setShow={setadTextShow} show={adTextShow} setText={setText} text={text} /> : null}
        </div>
    );
}