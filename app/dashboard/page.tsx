'use client'

import Link from "next/link";
import PageGreeting from "../components/PageGreeting";
import "./style.css";
import React from "react";
import Avatar from "../components/Avatar";

function StudentRendering() {
    return;
}
function ModeratorRendering() {
    return;
}
function InstructorRendering() {
    return;
}

function Page() {
    return (
        <div className="page">
            <section className="left_col">
                <PageGreeting />
                <section className="test_section">
                    <h3>Доступные тесты</h3>
                </section>
            </section>
            <section className="right_col">
                <div className="stat_cards">
                    <div className="stat_card"></div>
                    <div className="stat_card"></div>
                </div>
                <section className="group_card">
                    <header className="card_header">
                        <section>
                            <h3>ИСП9621</h3>
                            <span className="font_body font__dulled">
                                Участники вашей группы
                            </span>
                        </section>
                        <Link
                            href="/group"
                            className="button button_outlined button_small"
                        >
                            Показать всех
                        </Link>
                    </header>
                    <main className="card_body">
                    </main>
                </section>
            </section>
        </div>
    );
}

export default Page;
