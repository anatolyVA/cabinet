"use client";

import React from "react";
import "./style.css";
import { Chat, Files } from "@phosphor-icons/react";

let user = {
    name: "Данила",
    lastname: "Евмененков",
    patronym: "Игоревич",
    messages: 0,
    availableTest: 5,
};

function PageGreeting() {
    return (
        <div className="page-greeting">
            <section className="page-greeting__left">
                <header>
                    <h3>Добрый день, {user.name}</h3>
                </header>
                <main className="notifications">
                    <div className="notification font_label_l font_light_white">
                        <Chat size={18} />
                        <span>
                            {user.messages} новых сообщений
                        </span>
                    </div>
                    <div className="notification font_label_l font_light_white">
                        <Files size={18} />
                        <span>
                            {user.availableTest} доступных тестов
                        </span>
                    </div>
                </main>
            </section>
            <section className="page-greeting__right">
                <span className="font_body font_text-nowrap">20 декабря, 2023 г.</span>
                <span className="font_body font_bold font_light_white">
                    Среда
                </span>
                <img className="illustration_exams" src="Exams.png"></img>
            </section>
        </div>
    );
}

export default PageGreeting;
