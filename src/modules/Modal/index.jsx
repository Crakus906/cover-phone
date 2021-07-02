import React from "react";
import { CancelSvg } from "../../assets/icons";

import "./style.scss";

export default function Modal({ show, setShow }) {    
   
    return(
        <div className="modal-background">
            <div className="modal">
                <CancelSvg onClick={() => setShow(!show)}/>
                <div className="title">ВЫБОР МОДЕЛИ</div>
                <select name="" id=""></select>
                <select name="" id=""></select>
            </div>
        </div>
    );
}