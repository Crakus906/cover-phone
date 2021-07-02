import React, { useState } from "react";
import { Modal } from "../../modules/index";
import "./style.scss";

export default function Menu() {
    const [ show, setShow ] = useState(false);  

    return (  
        <div className="menu-component" >
            <div className="title-menu" onClick={() => setShow(!show)}>
                <span>Чехлы для Apple</span>
                <span>Чехлы для Apple iPhone 12 Pro Max</span>
            </div>
            {show ? <Modal show={show} setShow={setShow} /> : null}
        </div>
    );
}