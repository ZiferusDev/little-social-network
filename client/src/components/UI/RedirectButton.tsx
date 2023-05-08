import React from 'react'
import styles from "./styles/redirectButton.module.css"

interface RedirectButtonProps {
    content: string,
    link: string,

}

export default function RedirectButton(props: RedirectButtonProps) {
  return (
    <button className={styles.button}
      onClick={(e) => {
        window.location.href=`http://localhost:3000${props.link}`;
      }}
    >
        {props.content}
    </button>
  )
}
