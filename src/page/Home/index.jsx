import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Content, Menu} from "../../modules/index";
import { caseCover } from "../../redux/action/caseCover";

import "./style.scss";

export default function Home() {
    const dispath = useDispatch();

    useEffect(() => {
        dispath(caseCover());
    },[dispath]);

    return (  
        <div className="home">
            <Menu />
            <Content />
        </div>
    );
}