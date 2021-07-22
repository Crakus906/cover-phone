/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCoverSelector, caseSelector } from "../../redux/selector/selector";
import { allCover, modalCover, priceCover } from "../../redux/action/caseCover";
import Select from "../../component/RSelect";

import "./style.scss";
import WraperModal from "../../component/WraperModal";

export default function Modal({ show, setShow, setNameCover, setSlug }) { 
    const [coverSlug, setCoverSlug] = useState("");
    const dispatch = useDispatch();
    
    const caseData = useSelector(caseSelector);
    const coverData = useSelector(allCoverSelector);

    const constructorsData = coverData?.filter(e => {
        const a = e.slug === coverSlug;
        return a;
    });
    
    const handleNameCover = (e) => {
        dispatch(allCover(e.slug));
        setNameCover(e.label);
    };
    const handleCoverSlug = (e) => {
        setCoverSlug(e.slug);
        setSlug(e.label);
    };
    
    const handleTypesCover = (constructorsData, e, price, ) => {
        dispatch(modalCover(constructorsData, e));
        dispatch(priceCover(price));
        setShow(!show);
    };

    return(
        <WraperModal setShow={setShow} show={show} title="ВЫБОР МОДЕЛИ">
            <Select
                onChange={(e) => handleNameCover(e)}
                options={caseData}
            />
            <Select 
                onChange={(e) => handleCoverSlug(e)}
                options={coverData}
            />
            {
                constructorsData ? constructorsData[0]?.constructors.map(e => (
                    <div className="types-cover" 
                        key={e} onClick={() => 
                        handleTypesCover(constructorsData[0]?.slug, e.value, e.price, e.discountPrice)}
                    >
                        <span>{e.label}</span>
                        <div className="price">{e.price} <span>грн</span> </div>
                    </div>
                )) : null
            }
        </WraperModal>
    );
}