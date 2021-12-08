import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open RPG system</title>
        <meta name="description" content="Open RPG system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Open RPG System</a>
        </h1>

        <p className={styles.description}>A game system that anyone can use.</p>

        <div className={styles.grid}>
          <Link href="/Apps">
            <div className={styles.card}>
              <h2>Apps &rarr;</h2>
              <p>Apps for taking the boring stuff out of gaming</p>
              <div>&nbsp;</div>
            </div>
          </Link>

          <Link href="/Create">
            <div className={styles.card}>
              <h2>Create &rarr;</h2>
              <p>Create Monsters/Characters, weapons, armor, spells</p>
            </div>
          </Link>

          <Link href="/Examples">
            <div className={styles.card}>
              <h2>Examples &rarr;</h2>
              <p>Simple Examples of using weapons etc in game play</p>
            </div>
          </Link>

          <Link href="/Game">
            <div className={styles.card}>
              <h2>Game! &rarr;</h2>
              <p>Setup and Play your game with ease.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
