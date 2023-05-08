import React, { useState } from "react";
import Input from '../UI/Input';
import SubmitButton from '../UI/SubmitButton';
import RedirectButton from '../UI/RedirectButton';
import styles from "./styles/form.module.css"
import { login } from "../../API/login";


export default function LoginForm() {
  
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("");

  const handleClick = (): void => {
    login(email,password);
  }

    return (
        <div className={styles.layout} style={{marginTop:"20vh"}}>
            <div className={styles.form}>
                <p className={styles.heading} style={{margin: "2vh 0 2vh 0"}}>Отправиться в космос</p>
                <Input
                  label = "Введите свой e-mail"
                  type = "email"
                  value = {email}
                  setValue={setEmail}
                />
                <Input
                  label = "Введите пароль"
                  type = "password"
                  value = {password}
                  setValue={setPassword}
                />
                <button 
                onClick={handleClick}
                className={styles.submitBtn}
                >Войти</button>
            </div>
        <p style={{fontSize: "25px", margin: "1vw 0 1vw 0"}}>Не зарегистрированы?</p>
        <RedirectButton 
          content='Получить свой шатл'
          link="/registration"
        />
      </div>
    )
}