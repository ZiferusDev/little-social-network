import React, { useState } from 'react';
import Input from '../UI/Input';
import RedirectButton from '../UI/RedirectButton';
import IInput from '../../models/IInput';
import styles from "./styles/form.module.css"
import { registration } from '../../API/registration';

export default function Registration() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [education, setEducation] = useState<string>("");
    const [dateOfBirth, setBirthDate] = useState<Date>(new Date());
  
    
    const handleClick = (): void => {
      registration({email, password, name, surname, city, education, dateOfBirth});
    }
    
    const fields:  IInput[] = [
      {label: "Адрес эл. почты*",                   type: "email",    value: {email},             setValue: {setEmail}},
      {label: "Придумайте пароль*",                 type: "password", value: {password},          setValue: {setPassword}},
      {label: "Ваше имя*",                          type: "text",     value: {name},              setValue: {setName}},
      {label: "Ваша фамилия*",                      type: "text",     value: {surname},           setValue: {setSurname}},
      {label: "Город, в котором вы сейчас живёте",  type: "text",     value: {city},              setValue: {setCity}},
      {label: "Где вы учитесь?",                    type: "text",     value: {education},         setValue: {setEducation}},
      {label: "Дата вашего рождения",               type: "date",     value: {dateOfBirth},       setValue: {setBirthDate}}
    ];

  return (
    <div className={styles.layout}>
      <div className={styles.form}>
        <p className={styles.heading}>Получить свой шатл</p>
        { fields.map((field) => {
            return <Input 
            label = {field.label}
            type = {field.type}
            value = {field.value}
            setValue={field.setValue}
            />
          })
        }
        <button 
          className={styles.submitBtn}
          onClick={handleClick}
        
        >"Зарегистрироваться"</button> 
      </div>
      <p style={{fontSize: "25px", margin: "1vw 0 1vw 0"}}>Уже зарегистрированы?</p>
      <RedirectButton 
        content='Отправиться в космос'
        link=""
      />
    </div>
  )
}
