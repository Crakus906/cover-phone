/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { allCoverSelector, modalCoverSelector, priceSelector } from "../../redux/selector/selector";
// import { Modal } from "../../modules/index";
import "./style.scss";

export default function Content() {
    const cover = useSelector(modalCoverSelector);
    const price = useSelector(priceSelector);

    if(!cover) return null;
    const {
        images: { mask, background, shadows, thumb, overlay},
        title,
    } = cover;

    return (  
        <div className="content">
            <div className="container-cover">
                <div className="title-content">
                    <span className="title-cover">{title}</span>
                    <span className="price">{price}<span className="grn">₴</span></span>
                </div>
                <img className="cover" src={background} alt="" />                
            </div>
        </div>
    );
}