import styles from './footer.module.css'
import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Desarrollado por <a target='blank' href="https://www.gabrielmaestre.com/">Gabriel Maestre</a> para Security and System</p>
        <a className={styles.github} target='blank' href="#">
          <FaGithub size={25} color='#525252' />
        </a>
      </div>
    </footer>
  )
}