import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

const helloArray = ['H', 'e', 'l', 'l', 'o', ','];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <motion.h1 className={styles.title} layoutId='homeTitle'>
            {/* <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              H
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              e
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              l
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              l
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              o
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              ,
            </motion.span> */}
            {helloArray.map((letter, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2 }}
                className={styles.singleLetter}>
                {letter}
              </motion.span>
            ))}
            <br />
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              I
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              '
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              m
            </motion.span>{' '}
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              J
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              e
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              f
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              f
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              ,
            </motion.span>
            <br />
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              F
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              r
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              o
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              n
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              t
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              e
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              n
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              d
            </motion.span>{' '}
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              D
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              e
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              v
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              e
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              l
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              o
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              p
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              e
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              r
            </motion.span>
            <motion.span
              className={styles.pictureDot}
              layoutId='picture'></motion.span>
          </motion.h1>
        </header>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <motion.li className={styles.listElement} layoutId='aboutmeTitle'>
              <Link href='/aboutme'>
                <a>About me</a>
              </Link>
            </motion.li>
            <li className={styles.listElement}>
              <Link href='/aboutme'>
                <a>Technologies</a>
              </Link>
            </li>
            <li className={styles.listElement}>
              <Link href='/aboutme'>
                <a>Projects</a>
              </Link>
            </li>
            <li className={styles.listElement}>
              <Link href='/aboutme'>
                <a>Contact me</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.externalList}>
            <li className={styles.externalElement}>GitHub</li>
            <li className={styles.externalElement}>Linkedin</li>
            <li className={styles.externalElement}>CV</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
