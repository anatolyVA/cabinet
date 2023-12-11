import React from "react";
import "./style.css";
import { User } from "@phosphor-icons/react";
import Avatar from "../Avatar";

function UserMenu() {
    return (
        <div className="user-menu">
            <Avatar size={32}/>
            <div className="user-menu__info">
                <span className="font_label_m">Евмененков Д. И.</span>
                <span className="font_label_s font_bold font_light">Студент</span>
            </div>
        </div>
    );
}

export default UserMenu;
