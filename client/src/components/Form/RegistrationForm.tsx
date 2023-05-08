import React from 'react';
import Input from '../UI/Input';
import IInput from '../../models/IInput';
import styles from "./styles/registration.module.css"

export default function Registration() {

    const fields:  IInput[] = [
        {label: "Адрес эл. почты*", type: "email"},
        {label: "Придумайте пароль*", type: "password"},
        {label: "Ваше имя*", type: "text"},
        {label: "Ваша фамилия*", type: "text"},
        {label: "Город, в котором вы сейчас живёте", type: "text"},
        {label: "Где вы учитесь?", type: "text"},
        {label: "Дата вашего рождения", type: "date"}
    ];


  return (
    <div className={styles.registration}>
      <div className={styles.form}>
        { fields.map((field) => {
            return <Input 
            label = {field.label}
            type = {field.type}
            />
          })
        }
      </div>
    </div>
  )
}
