/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ModalEditText from "../../modules/ModalEditText";

import "./style.scss";

export default function ScrollableList(props) {
    const [ textId, setTextId ] = useState(0);
    const [ value, setValue ] = useState("");
    const [ show, setShow ] = useState(false);

    const handleTextValue = (e) => {
        setShow(!show);
        setValue(e.text);
    };

    const {
        children,
        file,
        text
    } = props;

    return (  
        <ul className="scrollable-list">
            <li className="edit-elm">
                {children}
            </li>
            {file?.map(e => (
                <li key={e}><img className="img-scrollable"src={URL.createObjectURL(e)} alt="" /></li>
            ))}
            {text?.map((e, i) => {
                if( textId === i) {
                    return (
                        <li 
                            key={e} 
                            onClick={() => handleTextValue(e)} 
                            className={i === textId ? "text-list active" : "text-list"}
                        >
                            {e.text.slice(0,2)}
                        </li>
                    );
                } else return (
                    <li 
                        key={e} 
                        onClick={() => setTextId(i)} 
                        className={i === textId ? "text-list active" : "text-list"}
                    >
                        {e.text.slice(0,2)}
                    </li>
                );
            })} 
            {show ? <ModalEditText setShow={setShow} show={show} value={value} /> : null}
        </ul>
    );
}