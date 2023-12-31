import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import "./page.css";
import Community from "Community.png";
import Link from "next/link";

export default function Page() {
    return (
        <div className="auth_page">
            <section className="form_frame">
                <img className="image_community" src="Community.png"></img>
                <img className="image_teacher" src="Teacher.png"></img>
                <form className="form">
                    <header className="form_header">
                        <h1>Вход</h1>
                        <span className="font_body font_bold font_light">
                            Заполните форму, чтобы войти в личный кабинет
                        </span>
                    </header>
                    <main className="form_group">
                        <Input
                            placeholder="Введите логин"
                            className="input"
                        ></Input>
                        <Input
                            type="password"
                            placeholder="Введите пароль"
                            className="input"
                        ></Input>
                        <CheckBox
                            labelClassname="font_label_m font_light"
                            id="d"
                            label="Запомнить меня"
                        />
                    </main>

                    <Link
                        href="/dashboard"
                        className="button button_medium button_filled"
                    >
                        Войти
                    </Link>
                </form>
            </section>
            <section className="scenery_frame">
                <header className="form_header">
                    <h1>Добро пожаловать!</h1>
                    <span className="font_body font_bold font_light">
                        Заполните форму, чтобы войти в личный кабинет
                    </span>
                </header>
                <img src="OnlineTest.png"></img>
            </section>
        </div>
    );
}
