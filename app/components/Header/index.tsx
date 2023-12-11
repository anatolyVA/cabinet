"use client";

import React from "react";
import "./style.css";
import Button from "../Button";
import { Bell, Chat, DoorOpen } from "@phosphor-icons/react";
import UserMenu from "../UserMenu";
import Link from "next/link";
function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <h3>Главная</h3>
            </div>
            <div className="header__right">
                <Button
                    disabled={true}
                    className="button button_outlined button_icon_medium"
                >
                    <Bell size={24} />
                </Button>
                <Button
                    disabled={true}
                    className="button button_outlined button_icon_medium"
                >
                    <Chat size={24} />
                </Button>
                <UserMenu />
                <Link href='/' className="button button_outlined button_icon_medium">
                    <DoorOpen size={24} />
                </Link>
            </div>
        </header>
    );
}

export default Header;
