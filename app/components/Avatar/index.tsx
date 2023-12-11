import React from "react";
import "./style.css";
import { User } from "@phosphor-icons/react";

type Props = {
    size: number;
};

function Avatar({ size }: Props) {
    return (
        <div style={{ width: size, height: size }} className="avatar">
            <User size={size / 2.5} />
        </div>
    );
}

export default Avatar;
