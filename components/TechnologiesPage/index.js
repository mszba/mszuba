import SubpageLayout from '../../layouts/SubpageLayout';
import { motion } from 'framer-motion';
import styles from './TechnologiesPage.module.css';

import { technologiesData } from './technologiesData';

const TechnologiesPage = () => {
  return (
    <SubpageLayout>
      <header className={styles.header}>
        <motion.h1 className={styles.title} layoutId='technologiesTitle'>
          My skills
        </motion.h1>
        <motion.h2
          className={styles.subTitleText}
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.165, 0.84, 0.44, 1],
          }}>
          I mainly use frontend technologies but I am also interested in backend
          part of a web development.
        </motion.h2>
      </header>
      <main className={styles.main}>
        {technologiesData.map((technology, i) => (
          <motion.div
            key={i}
            layoutId={technology.layoutId}
            className={styles.element}>
            <motion.img
              whileHover={{ scale: 1.15 }}
              className={styles.elementImg}
              src={technology.src}
              alt={technology.layoutId}
            />
            <span>{technology.layoutId}</span>
          </motion.div>
        ))}
      </main>
    </SubpageLayout>
  );
};

export default TechnologiesPage;
