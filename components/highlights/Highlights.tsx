import { RiCodeView } from "react-icons/ri"
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import styles from './hightlights.module.css'

export const Highlights = () => {
  return (
    <>
      <div className={styles.container}>
        <span className="tracking-tight">Creado por</span>
        <h1 className="tracking-tight">Gabriel Maestre</h1>
      </div>

      <article className={styles.article}>
        <div className={styles.highlights}>
          <RiCodeView size={13} color="#525252"/>
          <span className="tracking-tight">Frontend Developer</span>
        </div>
        
        <div className={styles.highlights}>
          <IoLocationOutline size={13} color="#525252"/>
          <span className="tracking-tight">Actualmente en Venezuela</span>
        </div>

        <div className={styles.highlights}>
          <FaRegStar size={13} color="#525252"/>
          <span className="tracking-tight">Disponible para trabajar a tiempo completo</span>
        </div>
      </article>
    </>
  )
}