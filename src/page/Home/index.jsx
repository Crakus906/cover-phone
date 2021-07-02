import React from "react";
import { Content, Menu} from "../../component/index";

import "./style.scss";

export default function Home() {

    return (  
        <div className="home">
            <Menu />
            <Content />
        </div>
    );
}