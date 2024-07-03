import styles from "./errorMessage.module.css";

interface Props {
  message: string | undefined;
}

export const ErrorMessage = ( { message }: Props ) => {
  if(!message) return;
  return (
    <p className={styles.p}>
      {message}
    </p>
  )
}