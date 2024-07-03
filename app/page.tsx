import Image from "next/image";
import styles from "./page.module.css";
import { About, ContactForm, Highlights, Interests } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src='/images/gabriel.jpg'
            width={1000}
            height={1000}
            className={styles.img}
            alt="User Main Image"
          />
        </div>
        <div className={styles.container}>
          <Highlights />
          <About />
          <Interests />
        </div>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
