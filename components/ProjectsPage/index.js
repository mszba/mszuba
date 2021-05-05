import { motion } from 'framer-motion';
import SubpageLayout from '../../layouts/SubpageLayout';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { ImGithub, ImLink } from 'react-icons/im';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <SubpageLayout>
      <header className={styles.header}>
        <motion.h1 className={styles.title} layoutId='projectsTitle'>
          My projects
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          obcaecati autem consequuntur odit nostrum nemo quo at libero.
        </motion.h2>
      </header>
      <main className={styles.main}>
        <article className={styles.projectElement}>
          <div className={styles.projectTextWrap}>
            <Fade triggerOnce cascade delay={800}>
              <h3 className={styles.projectTitle}>
                Senter Web App - dolor sit amet consectetur adipisicing elit
              </h3>

              <p className={styles.projectText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quas magnam eaque consequuntur iure doloribus a
                totam adipisci ullam! Quibusdam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolores tempore. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Consequatur quas magnam
                eaque consequuntur iure doloribus a totam adipisci ullam!
                Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolores tempore. Lorem ipsum dolor sit.
              </p>
            </Fade>
            <ul className={styles.projectLinks}>
              <Fade triggerOnce delay={900} cascade direction='right'>
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
              </Fade>
            </ul>
          </div>
          <Fade triggerOnce delay={800}>
            <div className={styles.projectImgWrap}>
              <div className={styles.projectImg}></div>
            </div>
          </Fade>
        </article>

        <article
          className={`${styles.projectElement} ${styles.projectElementReverse}`}>
          <div
            className={`${styles.projectTextWrap} ${styles.projectTextWrapReverse}`}>
            <Fade triggerOnce delay={600} cascade>
              <h3 className={styles.projectTitle}>
                School Web App - dolor sit amet consectetur adipisicing elit
              </h3>
              <p className={styles.projectText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quas magnam eaque consequuntur iure doloribus a
                totam adipisci ullam! Quibusdam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolores tempore. Lorem ipsum dolor
                sit.
              </p>
            </Fade>
            <ul className={styles.projectLinks}>
              <Fade triggerOnce cascade delay={800} cascade direction='right'>
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
              </Fade>
            </ul>
          </div>
          <Fade triggerOnce delay={800}>
            <div
              className={`${styles.projectImgWrap} ${styles.projectImgWrapReverse}`}>
              <div className={styles.projectImg}></div>
            </div>
          </Fade>
        </article>

        <article className={styles.projectElement}>
          <div className={styles.projectTextWrap}>
            <Fade triggerOnce delay={600} cascade>
              <h3 className={styles.projectTitle}>
                School Web App - dolor sit amet consectetur adipisicing elit
              </h3>

              <p className={styles.projectText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quas magnam eaque consequuntur iure doloribus a
                totam adipisci ullam! Quibusdam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolores tempore. Lorem ipsum dolor
                sit.
              </p>
            </Fade>
            <ul className={styles.projectLinks}>
              <Fade triggerOnce cascade delay={800} cascade direction='right'>
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
              </Fade>
            </ul>
          </div>
          <Fade triggerOnce delay={800}>
            <div className={styles.projectImgWrap}>
              <div className={styles.projectImg}></div>
            </div>
          </Fade>
        </article>
      </main>
    </SubpageLayout>
  );
};

export default ProjectsPage;
