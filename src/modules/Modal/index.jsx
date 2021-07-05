/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { allCoverSelector, caseSelector } from "../../redux/selector/selector";
import { allCover } from "../../redux/action/caseCover";
import { CancelSvg } from "../../assets/icons";
import Select from "../../component/RSelect";

import "./style.scss";

export default function Modal({ show, setShow }) { 
    const [coverSlug, setCoverSlug] = useState("");

    const dispatch = useDispatch(allCover);
    
    const caseData = useSelector(caseSelector);
    const coverData = useSelector(allCoverSelector);

    const constructorsData = coverData?.filter(e => {
        const a = e.slug === coverSlug;
        return a;
    });
    console.log(constructorsData ? constructorsData[0].id : []);
    debugger;
    return(
        <div className="modal-background">
            <div className="modal">
                <CancelSvg onClick={() => setShow(!show)}/>
                <div className="title">ВЫБОР МОДЕЛИ</div>
                    <Select
                        onChange={(e) => dispatch(allCover(e.slug))}
                        options={caseData}
                    />
                    <Select 
                        onChange={(e) => setCoverSlug(e.slug)}
                        options={coverData}
                    />
                    {
                        // constructorsData[0].map(e => (
                        //     <div key={e}>{e}</div>
                        // ))
                    }
            </div>
        </div>
    );
}