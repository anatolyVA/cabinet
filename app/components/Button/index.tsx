import React from "react";
import "./style.css";
import Link from "next/link";

type Props = {
    children?: React.ReactNode;
    className: string;
    onClick?: (e: React.MouseEvent) => void;
    href?: string;
    disabled?: boolean;
    width?: number | string;
};

function Button({ width, children, className, onClick, disabled, ...attrs }: Props) {
    const Tag = attrs.href ? {Link} : "button";

    return (
        <button style={{width: width}} className={className} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
