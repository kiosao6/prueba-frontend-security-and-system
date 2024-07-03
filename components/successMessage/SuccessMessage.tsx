'use client'
import { IoCheckmarkCircle } from "react-icons/io5";
import styles from './successMessage.module.css'

export const SuccessMessage = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.div} ${styles.animate}`}>
          <IoCheckmarkCircle size={20} color="#34d39d" />
          <p>Su mensaje ha sido enviado con éxito</p>
      </div>
    </div>
  )
}