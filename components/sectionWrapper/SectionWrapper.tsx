import styles from './sectionWrapper.module.css'

interface Props {
  title: string;
  children: React.ReactNode;
};

export const SectionWrapper = ({
  title, 
  children,
}: Props) => {

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>
        { title }
      </h2>
      <div className={styles.container}>
        { children }
      </div>
    </section>
  )
}