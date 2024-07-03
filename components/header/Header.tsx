import styles from './header.module.css'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} tracking-tight`}>
        <p style={{fontWeight: '500', color: 'black'}}>Security and System</p>
        <article className={styles.article}>
          <Image
            className={styles.img}
            src='/images/gabriel.jpg'
            width={300}
            height={300}
            alt='User Image'
          />
          <p style={{fontWeight: '500', fontSize: '14px', color: 'black'}}>Hola, Gabriel</p>
          <IoIosArrowDown className={styles.icon} size={13} />
        </article>
      </div>
    </header>
  )
}