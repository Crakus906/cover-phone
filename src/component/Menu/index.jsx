import React, { useState } from "react";
import { Modal } from "../../modules/index";
import "./style.scss";

export default function Menu() {
    const [ show, setShow ] = useState(false);  

    return (  
        <div className="menu-component" >
            <div className="title-menu" onClick={() => setShow(!show)}>
                <div>Чехлы для Apple</div>
                <div>Чехлы для Apple iPhone 12 Pro Max</div>
            </div>
            {show ? <Modal show={show} setShow={setShow} /> : null}
        </div>
    );
}