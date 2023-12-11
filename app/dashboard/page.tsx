"use client";

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
      <div className="page__header">
        <PageGreeting />
        <div className="page__header__cards">
          <div className="stat">
            <div className="stat__card">
              <div className="stat_icon completed_tests"></div>
              <div>
                <span className="font_label_l font__dulled">
                  Выполнено тестов
                </span>
                <h2>15</h2>
              </div>
            </div>
            <div className="stat__card">
              <div className="stat_icon avg_mark"></div>
              <div>
                <span className="font_label_l font__dulled">
                  Средняя оценка
                </span>
                <h2>3.8</h2>
              </div>
            </div>
          </div>
          <section className="group__card">
            <header className="group__card__header">
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
            <main className="card__body">
              <Avatar size={64} />
              <Avatar size={64} />
              <Avatar size={64} />
              <Avatar size={64} />
              <Avatar size={64} />
              <Avatar size={64} />
              <Avatar size={64}/>
            </main>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Page;
