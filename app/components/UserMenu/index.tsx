import React from "react";
import "./style.css";
import { User } from "@phosphor-icons/react";
import Avatar from "../Avatar";

function UserMenu() {
    return (
        <div className="user_menu">
            <Avatar size={32}/>
            <div className="user_info">
                <span className="font_label_m">Евмененков Д. И.</span>
                <span className="font_label_s font__bold font__dulled">Студент</span>
            </div>
        </div>
    );
}

export default UserMenu;
