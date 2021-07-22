import React from "react";
import { CancelSvg } from "../../assets/icons";

import "./style.scss";

export default function WraperModal(props) { 

    const {
        children,
        setShow,
        show,
        title,
        modal,
    } = props;

    return(
        <div className="modal-background">
            <div className={`modal ${modal}`}>
                <CancelSvg className="svg-modal" onClick={() => setShow(!show)}/>
                <div className="title">{title}</div>
                {children}
            </div>
        </div>
    );
}