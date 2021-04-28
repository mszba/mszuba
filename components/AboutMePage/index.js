import { motion } from 'framer-motion';
import SubpageLayout from '../../layouts/SubpageLayout';
import styles from './AboutMePage.module.css';

const AboutMePage = () => {
  return (
    <SubpageLayout>
      <header className={styles.header}>
        <motion.h1 className={styles.title} layoutId='aboutmeTitle'>
          About me
        </motion.h1>
        <div className={styles.subTitleContent}>
          <motion.div
            className={styles.pictureWrap}
            layoutId='picture'></motion.div>
          <h2 className={styles.subtitle}>
            I'm Jeff, <br /> Frontend Developer
          </h2>
        </div>
      </header>
      <main className={styles.main}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum
          illo similique consequuntur. Beatae a aperiam voluptatibus incidunt
          quod illum dolores? Aliquid eum sed vitae sapiente, odio illo vel
          fugiat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          soluta illum nemo ea animi saepe ipsum dignissimos ab velit quia sed
          accusamus magnam voluptates, ex minus quo, maiores ullam nesciunt.
        </p>
      </main>
    </SubpageLayout>
  );
};

export default AboutMePage;
