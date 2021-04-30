import SubpageLayout from '../../layouts/SubpageLayout';
import { motion } from 'framer-motion';
import styles from './TechnologiesPage.module.css';

import { technologiesData } from './technologiesData';

const TechnologiesPage = () => {
  return (
    <SubpageLayout>
      <header className={styles.header}>
        <motion.h1 className={styles.title} layoutId='technologiesTitle'>
          Technologies
        </motion.h1>
        <h2 className={styles.subTitleText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          obcaecati autem consequuntur odit nostrum nemo quo at libero.
        </h2>
      </header>
      <main className={styles.main}>
        {technologiesData.map((technology, i) => (
          <motion.div
            key={i}
            layoutId={technology.layoutId}
            className={styles.element}></motion.div>
        ))}
      </main>
    </SubpageLayout>
  );
};

export default TechnologiesPage;
