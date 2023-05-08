
import styles from "./styles/submitButton.module.css"

interface SubmitButtonProps {
    content: string,
    }


function SubmitButton(props: SubmitButtonProps) {

  return (
    <button 
      className = {styles.button} 
      type = 'submit'>{props.content}
    </button>
  )
}

export default SubmitButton;