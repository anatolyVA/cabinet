import React from "react";
import "./style.css";

type Props = {
    children?: React.ReactNode;
    className: string;
    onClick?: (e: React.MouseEvent) => void;
    href?: string;
    disabled?: boolean;
    width?: number | string;
};

function Button({ width, children, className, onClick, disabled, ...attrs }: Props) {
    const Tag = attrs.href ? "a" : "button";

    return (
        <Tag style={{width: width}} className={className} disabled={disabled} onClick={onClick}>
            {children}
        </Tag>
    );
}

export default Button;
