import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main
        className={styles.main}
        style={{ position: 'absolute', left: 0, right: 0 }}>
        <motion.h1
          style={{ fontSize: '43px', color: '#ffff' }}
          layoutId='title'>
          Test of the animated Title
        </motion.h1>
        <Link href='/aboutme'>
          <a style={{ color: '#fff' }}>ABOUT ME</a>
        </Link>
      </main>
    </DefaultLayout>
  );
}
