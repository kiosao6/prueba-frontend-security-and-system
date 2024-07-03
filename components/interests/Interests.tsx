
import { SectionWrapper } from '@/components'
import styles from './interests.module.css'

export const Interests = () => {
  return (
    <SectionWrapper title='Mis intereses'>
        <ul className={styles.ul}>
          <li>Desarrollo Frontend</li>
          <li>SEO</li>
          <li>Diseño UI / UX</li>
          <li>Next.js</li>
          <li>Astro</li>
          <li>PostgreSQL</li>
          <li>Prisma ORM</li>
        </ul>
    </SectionWrapper>
  )
}