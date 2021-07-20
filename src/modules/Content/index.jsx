/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { modalCoverSelector } from "../../redux/selector/selector";
// import { Modal } from "../../modules/index";
import "./style.scss";

export default function Content() {
    const cover = useSelector(modalCoverSelector);

    if(!cover) return null;
    const {
        images: { mask, background, shadows, thumb, overlay},
        title,
    } = cover;

    return (  
        <div className="content">
            <div>{title}</div>
            <div>
                <div></div>
                <img src={background , shadows} alt="" />
            </div>
        </div>
    );
}