import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import "./page.css";
import Community from "Community.png";

export default function Auth() {
    return (
        <div className="auth_page">
            <div className="form_frame">
                <img className="image_community" src="Community.png"></img>
                <img className="image_teacher" src="Teacher.png"></img>
                <form className="form">
                    <div className="form_header">
                        <h1>Вход</h1>
                        <span className="font_body font__bold font__dulled">
                            Заполните форму, чтобы войти в личный кабинет
                        </span>
                    </div>
                    <div className="form_group">
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
                            labelClassname="font_label_m font__dulled"
                            id="d"
                            label="Запомнить меня"
                        />
                    </div>

                    <Button
                        width="100%"
                        className="button button_medium button_filled"
                    >
                        Войти
                    </Button>
                </form>
            </div>
            <div className="scenery_frame">
                <div className="form_header">
                    <h1>Добро пожаловать!</h1>
                    <span className="font_body font__bold font__dulled">
                        Заполните форму, чтобы войти в личный кабинет
                    </span>
                </div>
                <img src="OnlineTest.png"></img>
            </div>
        </div>
    );
}
