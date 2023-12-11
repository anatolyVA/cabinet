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
        <div className="page_greeting">
            <section className="page_greeting_left">
                <header>
                    <h3>Добрый день, {user.name}</h3>
                </header>
                <main className="notifications">
                    <div className="notification font_label_l font__light_dulled">
                        <Chat size={18} />
                        <span>
                            {user.messages} новых сообщений
                        </span>
                    </div>
                    <div className="notification font_label_l font__light_dulled">
                        <Files size={18} />
                        <span>
                            {user.availableTest} доступных тестов
                        </span>
                    </div>
                </main>
            </section>
            <section className="page_greeting_right">
                <span className="font_body">20 декабря, 2023 г.</span>
                <span className="font_body font__bold font__light_dulled">
                    Среда
                </span>
                <img className="image_exams" src="Exams.png"></img>
            </section>
        </div>
    );
}

export default PageGreeting;
