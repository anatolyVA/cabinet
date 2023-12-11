"use client";

import React from "react";
import Link from "next/link";
import "./style.css";
import Button from "../Button";
import {
    SquaresFour,
    Files,
    Books,
    Users,
    Chat,
    Medal,
    GraduationCap,
    User,
    Student,
    WarningOctagon,
    DoorOpen,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

type Props = {
    path: string;
};

function StudentRendering({ path }: Props) {
    return (
        <>
            <section className="nav-group">
                <header className="nav-group__header">
                    <span>
                        Образование
                    </span>
                </header>
                <main className="nav-group__buttons">
                    <Link
                        href="/tests"
                        className={`button button_sidebar button_medium ${
                            path == "/tests" && "active"
                        }`}
                    >
                        <Files size={24} />
                        Тесты
                    </Link>
                    <Button
                        disabled={true}
                        className="button button_sidebar button_medium"
                    >
                        <Books size={24} />
                        Материалы
                    </Button>
                </main>
            </section>
            <section className="nav-group">
                <header className="nav-group__header">
                    <span>
                        Сообщество
                    </span>
                </header>
                <main className="nav-group__buttons">
                    <Link
                        href="/group"
                        className={`button button_sidebar button_medium ${
                            path == "/group" && "active"
                        }`}
                    >
                        <Users size={24} />
                        Группа
                    </Link>
                    <Button
                        disabled={true}
                        className="button button_sidebar button_medium"
                    >
                        <Chat size={24} />
                        Сообщения
                    </Button>
                    <Button
                        disabled={true}
                        className="button button_sidebar button_medium"
                    >
                        <Medal size={24} />
                        Рейтинг
                    </Button>
                </main>
            </section>
        </>
    );
}
function InstructorRendering({ path }: Props) {
    return (
        <>
            <section className="nav-group">
                <header className="nav-group__header">
                    <span>
                        Образование
                    </span>
                </header>
                <main className="nav-group__buttons">
                    <Link
                        href="/tests"
                        className={`button button_sidebar button_medium ${
                            path == "/tests" && "active"
                        }`}
                    >
                        <Files size={24} />
                        Тесты
                    </Link>
                    <Button
                        disabled={true}
                        className="button button_sidebar button_medium"
                    >
                        <Books size={24} />
                        Материалы
                    </Button>
                </main>
            </section>
            <section className="nav-group">
                <header className="nav-group__header">
                    <span>
                        Сообщество
                    </span>
                </header>
                <main className="navgroup_buttons">
                    <Link
                        href="/groups"
                        className={`button button_sidebar button_medium ${
                            path == "/groups" && "active"
                        }`}
                    >
                        <Users size={24} />
                        Группы
                    </Link>
                    <Button
                        disabled={true}
                        className="button button_sidebar button_medium"
                    >
                        <Chat size={24} />
                        Сообщения
                    </Button>
                </main>
            </section>
        </>
    );
}
function ModeratorRendering({ path }: Props) {
    return (
        <>
            <section className="nav-group">
                <header className="nav-group__header">
                    <span>
                        Образование
                    </span>
                </header>
                <main className="navgroup_buttons">
                    <Link
                        href="/subjects"
                        className={`button button_sidebar button_medium ${
                            path == "/subjects" && "active"
                        }`}
                    >
                        <Books size={24} />
                        Дисциплины
                    </Link>
                    <Link
                        href="/specialties"
                        className={`button button_sidebar button_medium ${
                            path == "/specialties" && "active"
                        }`}
                    >
                        <GraduationCap size={24} />
                        Специальности
                    </Link>
                </main>
            </section>
            <section className="navgroup">
                <header className="navgroup_header">
                    <span>
                        Сообщество
                    </span>
                </header>
                <main className="navgroup_buttons">
                    <Link
                        href="/groups"
                        className={`button button_sidebar button_medium ${
                            path == "/groups" && "active"
                        }`}
                    >
                        <Student size={24} />
                        Группы
                    </Link>
                    <Link
                        href="/instructors"
                        className={`button button_sidebar button_medium ${
                            path == "/instructors" && "active"
                        }`}
                    >
                        <User size={24} />
                        Преподаватели
                    </Link>
                </main>
            </section>
        </>
    );
}
function SideBar() {
    const [userRole, setUserRole] = React.useState("student");
    const path = usePathname();
    return (
        <aside className="side-bar">
            <header className="side-bar__header">
                <h2>СКТ ЛК</h2>
            </header>
            <main className="side-bar__body">
                <Link
                    href="/dashboard"
                    className={`button button_sidebar button_medium ${
                        path == "/dashboard" && "active"
                    }`}
                >
                    <SquaresFour size={24} />
                    Главная
                </Link>
                {userRole == "student" && <StudentRendering path={path} />}
                {userRole == "moderator" && <ModeratorRendering path={path} />}
                {userRole == "instructor" && (
                    <InstructorRendering path={path} />
                )}
            </main>
            <footer className="side-bar__footer">
                <section className="support">
                    <img src="ServerDown.png"></img>
                    <span className="font_body font_bold font_light">
                        Возникла проблема?
                    </span>
                    <Button className="button button_outlined button_medium">
                        <WarningOctagon size={24} />
                        Тех. поддержка
                    </Button>
                </section>
                <hr></hr>
                <Link href="/" className="button button_filled button_medium">
                    <DoorOpen size={24} />
                    Выйти
                </Link>
            </footer>
        </aside>
    );
}

export default SideBar;
