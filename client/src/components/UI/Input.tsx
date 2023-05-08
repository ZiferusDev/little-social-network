import React from 'react'
import IInput from '../../models/IInput'
import styles from "./styles/input.module.css"

export default function Input(props: IInput) {
  return (
    <div className={styles.field}>
      <label htmlFor={props.label}> {props.label} </label>
      <input className={styles.input} type={props.type} name={props.label}/>
    </div>
  )
}
