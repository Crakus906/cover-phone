/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCoverSelector, caseSelector } from "../../redux/selector/selector";
import { allCover, modalCover } from "../../redux/action/caseCover";
import { CancelSvg } from "../../assets/icons";
import Select from "../../component/RSelect";

import "./style.scss";

export default function Modal({ show, setShow, setNameCover }) { 
    const [coverSlug, setCoverSlug] = useState("");
    const dispatch = useDispatch();
    
    const caseData = useSelector(caseSelector);
    const coverData = useSelector(allCoverSelector);

    const constructorsData = coverData?.filter(e => {
        const a = e.slug === coverSlug;
        return a;
    });
    
    const handleTypesCover = (constructorsData, e) => {
        dispatch(modalCover(constructorsData, e));
        setShow(!show);
    };

    const handleNameCover = (e) => {
        dispatch(allCover(e.slug));
        setNameCover(e.slug);
    };

    return(
        <div className="modal-background">
            <div className="modal">
                <CancelSvg onClick={() => setShow(!show)}/>
                <div className="title">ВЫБОР МОДЕЛИ</div>
                    <Select
                        onChange={(e) => handleNameCover(e)}
                        options={caseData}
                    />
                    <Select 
                        onChange={(e) => setCoverSlug(e.slug)}
                        options={coverData}
                    />
                    {
                        constructorsData ? constructorsData[0]?.constructors.map(e => (
                            <div className="types-cover" key={e} onClick={() => handleTypesCover(constructorsData[0]?.slug, e.value)}>
                                <span>{e.label}</span>
                                <div className="price">{e.price} <span>грн</span> </div>
                            </div>
                        )) : null
                    }
            </div>
        </div>
    );
}