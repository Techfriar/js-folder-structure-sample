
import Header from '@/themes/components/header/header';
import styles from './about-us.module.css';
import Footer from '@/themes/components/footer/footer';

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>About Us</h1>
        <p className={styles.description}>
          Welcome to our company! We are dedicated to providing the best service possible.
        </p>
        <section className={styles.team}>
          <h2>Our Team</h2>
          <p>Meet the amazing team that makes everything possible.</p>
        </section>
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>Our mission is to revolutionize the industry through innovative solutions.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
