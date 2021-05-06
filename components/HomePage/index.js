import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

import { technologiesData } from '../TechnologiesPage/technologiesData';
import { socialsData } from './homePageData';
import { socialAnimations, textAnimations } from './animations';

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
          <motion.h1 className={styles.title}>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.57,
                delay: 1.68,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              H
            </motion.span>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.25,
                delay: 1.45,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              e
            </motion.span>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.7,
                delay: 1.7,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              l
            </motion.span>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.2,
                delay: 1.2,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              l
            </motion.span>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.4,
                delay: 1.6,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              o
            </motion.span>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.3,
                delay: 1.6,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              ,
            </motion.span>
            <br />
            <motion.span className={styles.singleLetter}>I</motion.span>{' '}
            <motion.span className={styles.singleLetter}>a</motion.span>
            <motion.span className={styles.singleLetter}>m</motion.span>{' '}
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.4,
                delay: 1.3,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              M
            </motion.span>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              a
            </motion.span>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.8,
                delay: 1.3,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              r
            </motion.span>
            <motion.span
              className={styles.singleLetter}
              initial='out'
              animate='in'
              variants={textAnimations}
              transition={{
                duration: 0.6,
                delay: 1.6,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              k
            </motion.span>
            <motion.span
              className={styles.pictureDot}
              layoutId='picture'></motion.span>
            <br />
            <motion.span
              className={styles.frontendText}
              initial='out'
              animate='in'
              variants={{
                in: {
                  opacity: 1,
                  x: 0,
                },
                out: { opacity: 0, x: -60 },
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              Frontend Developer
            </motion.span>
          </motion.h1>
        </header>
        <nav className={styles.nav}>
          <motion.ul className={styles.list}>
            <motion.li className={styles.listElement} layoutId='aboutmeTitle'>
              <Link href='/aboutme'>
                <a>about me</a>
              </Link>
            </motion.li>
            <motion.li
              className={styles.listElement}
              layoutId='technologiesTitle'>
              <Link href='/technologies'>
                <a>my skills</a>
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
          </motion.ul>
          <motion.ul className={styles.externalList}>
            {socialsData.map((social, i) => (
              <motion.li
                key={i}
                id={social.iconName}
                initial='out'
                animate='in'
                variants={socialAnimations}
                transition={{
                  duration: 1,
                  delay: i * 0.5,
                  ease: [0.165, 0.84, 0.44, 1],
                }}>
                <a
                  className='social-btn flex-center'
                  href={social.urlAddress}
                  target='_blank'>
                  {social.icon}
                  <span className='social-text'>{social.text}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
