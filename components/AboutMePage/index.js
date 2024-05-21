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
          <motion.div className={styles.pictureWrap} layoutId='picture'>
            <img
              src='/profile_pic.jpg'
              alt='profile picture'
              className={styles.profilePic}
            />
          </motion.div>
          <motion.h2
            className={styles.subtitle}
            initial='out'
            animate='in'
            variants={{
              in: {
                opacity: 1,
                x: 0,
              },
              out: { opacity: 0, x: 60 },
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.165, 0.84, 0.44, 1],
            }}>
            I'm Mark, <br /> Frontend Developer
          </motion.h2>
        </div>
      </header>
      <main className={styles.main}>
        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.165, 0.84, 0.44, 1],
          }}>
            Hardworking Frontend Developer with 3 years of experience. I specialize in JavaScript, TypeScript, CSS and Vue. Working in various teams, I have successfully completed projects for clients in many industries. My skills include problem-solving ability, creativity, attention to detail and the ability to quickly adapt to new technologies. I am currently looking for new challenges and growth opportunities.
        </motion.p>
      </main>
    </SubpageLayout>
  );
};

export default AboutMePage;
