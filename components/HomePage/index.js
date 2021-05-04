import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

import { technologiesData } from '../TechnologiesPage/technologiesData';
import { socialsData } from './homePageData';

const helloArray = ['H', 'e', 'l', 'l', 'o', ','];

const HomePage = () => {
  return (
    <div className={styles.container}>
      {technologiesData.map((technology, i) => (
        <motion.div
          key={i}
          layoutId={technology.layoutId}
          className={`${technology.className} ${styles.element}`}></motion.div>
      ))}

      <div className={styles.wrapper}>
        <header className={styles.header}>
          <motion.h1 className={styles.title} layoutId='homeTitle'>
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
              M
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              a
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              r
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.singleLetter}>
              k
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={styles.pictureDot}
              layoutId='picture'></motion.span>
            <br />
            <motion.span
              // whileHover={{ scale: 1.2 }}
              className={styles.frontendText}>
              Frontend Developer
            </motion.span>
          </motion.h1>
        </header>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <motion.li className={styles.listElement} layoutId='aboutmeTitle'>
              <Link href='/aboutme'>
                <a>about me</a>
              </Link>
            </motion.li>
            <motion.li
              className={styles.listElement}
              layoutId='technologiesTitle'>
              <Link href='/technologies'>
                <a>technologies</a>
              </Link>
            </motion.li>
            <motion.li className={styles.listElement} layoutId='projectsTitle'>
              <Link href='/my-projects'>
                <a>my projects</a>
              </Link>
            </motion.li>
            <motion.li className={styles.listElement} layoutId='contactTitle'>
              <Link href='/contact-me'>
                <a>contact me</a>
              </Link>
            </motion.li>
          </ul>
          <ul className={styles.externalList}>
            {socialsData.map((social, i) => (
              <li key={i} id={social.iconName}>
                <a
                  className='social-btn flex-center'
                  href={social.urlAddress}
                  target='_blank'>
                  {social.icon}
                  <span className='social-text'>{social.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
