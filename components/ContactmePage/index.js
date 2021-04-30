import { motion } from 'framer-motion';
import SubpageLayout from '../../layouts/SubpageLayout';
import styles from './ContactmePage.module.css';

const ContactmePage = () => {
  return (
    <SubpageLayout>
      <header className={styles.header}>
        <motion.h1 className={styles.title} layoutId='contactTitle'>
          Contact me
        </motion.h1>
        <h2 className={styles.subTitleText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          obcaecati autem consequuntur odit nostrum nemo quo at libero.
        </h2>
      </header>
      <main className={styles.main}>
        <form className={styles.form}>
          <div className={styles.nameEmailWrap}>
            <input
              type='text'
              placeholder='Name'
              className={styles.nameEmailInput}
            />
            <input
              type='email'
              placeholder='Email'
              className={styles.nameEmailInput}
            />
          </div>
          <input
            type='text'
            placeholder='Subject'
            className={styles.subjectInput}
          />
          <textarea placeholder='Message' className={styles.messageInput} />
          <div className={styles.buttonWrap}>
            <button className={styles.formButton}>Send message</button>
          </div>
        </form>
      </main>
    </SubpageLayout>
  );
};

export default ContactmePage;
