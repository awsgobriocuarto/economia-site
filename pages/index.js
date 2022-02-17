import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sec. de Economía</h1>

        <p className={styles.description}>Gobierno de Río Cuarto</p>
      </main>
    </div>
  );
}
