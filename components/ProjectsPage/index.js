import { motion } from 'framer-motion';
import SubpageLayout from '../../layouts/SubpageLayout';
import { ImGithub, ImLink } from 'react-icons/im';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <SubpageLayout>
      <header className={styles.header}>
        <motion.h1 className={styles.title} layoutId='projectsTitle'>
          My projects
        </motion.h1>
        <h2 className={styles.subTitleText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          obcaecati autem consequuntur odit nostrum nemo quo at libero.
        </h2>
      </header>
      <main className={styles.main}>
        <article className={styles.projectElement}>
          <div className={styles.projectTextWrap}>
            <h3 className={styles.projectTitle}>
              Senter Web App - dolor sit amet consectetur adipisicing elit
            </h3>
            <p className={styles.projectText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quas magnam eaque consequuntur iure doloribus a totam
              adipisci ullam! Quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolores tempore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequatur quas magnam eaque
              consequuntur iure doloribus a totam adipisci ullam! Quibusdam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              tempore. Lorem ipsum dolor sit.
            </p>
            <ul className={styles.projectLinks}>
              <li id='github'>
                <a
                  className='social-btn flex-center social-btn-margin'
                  href='github.com'
                  target='_blank'>
                  <ImGithub />
                  <span className='social-text'>github</span>
                </a>
              </li>
              <li id='link'>
                <a
                  className='social-btn flex-center '
                  href='github.com'
                  target='_blank'>
                  <ImLink />
                  <span className='social-text'>link</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.projectImgWrap}>
            <div className={styles.projectImg}></div>
          </div>
        </article>

        <article
          className={`${styles.projectElement} ${styles.projectElementReverse}`}>
          <div
            className={`${styles.projectTextWrap} ${styles.projectTextWrapReverse}`}>
            <h3 className={styles.projectTitle}>
              School Web App - dolor sit amet consectetur adipisicing elit
            </h3>
            <p className={styles.projectText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quas magnam eaque consequuntur iure doloribus a totam
              adipisci ullam! Quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolores tempore. Lorem ipsum dolor sit.
            </p>
            <ul className={styles.projectLinks}>
              <li id='github'>
                <a
                  className='social-btn flex-center social-btn-margin'
                  href='github.com'
                  target='_blank'>
                  <ImGithub />
                  <span className='social-text'>github</span>
                </a>
              </li>
              <li id='link'>
                <a
                  className='social-btn flex-center '
                  href='github.com'
                  target='_blank'>
                  <ImLink />
                  <span className='social-text'>link</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.projectImgWrap} ${styles.projectImgWrapReverse}`}>
            <div className={styles.projectImg}></div>
          </div>
        </article>

        <article className={styles.projectElement}>
          <div className={styles.projectTextWrap}>
            <h3 className={styles.projectTitle}>
              School Web App - dolor sit amet consectetur adipisicing elit
            </h3>
            <p className={styles.projectText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quas magnam eaque consequuntur iure doloribus a totam
              adipisci ullam! Quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolores tempore. Lorem ipsum dolor sit.
            </p>
            <ul className={styles.projectLinks}>
              <li id='github'>
                <a
                  className='social-btn flex-center social-btn-margin'
                  href='github.com'
                  target='_blank'>
                  <ImGithub />
                  <span className='social-text'>github</span>
                </a>
              </li>
              <li id='link'>
                <a
                  className='social-btn flex-center '
                  href='github.com'
                  target='_blank'>
                  <ImLink />
                  <span className='social-text'>link</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.projectImgWrap}>
            <div className={styles.projectImg}></div>
          </div>
        </article>
      </main>
    </SubpageLayout>
  );
};

export default ProjectsPage;
