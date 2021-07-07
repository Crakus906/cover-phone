import React, { useState } from "react";
import { PictureSvg, TextSvg, FillSvg } from "../../assets/icons";
import ExpansionPanel from "../../component/ExpansionPanel";
import { Modal } from "../index";
import "./style.scss";

export default function Menu() {
    const [ show, setShow ] = useState(false);  

    return (  
        <div className="menu-component" >
            <div className="title-menu" onClick={() => setShow(!show)}>
                <div>Чехлы для Apple</div>
                <div>Чехлы для Apple iPhone 12 Pro Max</div>
            </div>
            <ExpansionPanel
                title="Картинки"
                svg={<><PictureSvg /></>}
            >
                <button className="drop-down-border">
                    +
                </button>   
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
            {show ? <Modal show={show} setShow={setShow} /> : null}
        </div>
    );
}