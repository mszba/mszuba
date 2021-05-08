import { motion } from 'framer-motion';
import SubpageLayout from '../../layouts/SubpageLayout';
import { Fade } from 'react-awesome-reveal';
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
          So far I have created three, real world projects such as API-connected
          web application, CRUD fullstack web application and Single Page
          Application.
        </motion.h2>
      </header>
      <main className={styles.main}>
        <article className={styles.projectElement}>
          <div className={styles.projectTextWrap}>
            <Fade triggerOnce cascade delay={800}>
              <h3 className={styles.projectTitle}>
                Senter - Web application to streamline and automate the
                development of SEO for websites and articles.
              </h3>

              <p className={styles.projectText}>
                The project is divided into six main modules: Website analysis,
                Keyword planner, Audit, Content analysis, Keyword analysis,
                Website info. <br /> My role was to create frontend with React
                and connect it to API based on Python. Project was created with
                collaboration with backend developer.
              </p>
            </Fade>
            <ul className={styles.projectLinks}>
              <Fade triggerOnce delay={900} cascade direction='right'>
                <li id='github'>
                  <a
                    className='social-btn flex-center social-btn-margin'
                    href='https://github.com/gpiechnik2/senter'
                    target='_blank'>
                    <ImGithub />
                    <span className='social-text'>github</span>
                  </a>
                </li>
                <li id='link'>
                  <a
                    className='social-btn flex-center '
                    href='https://github.com/gpiechnik2/senter'
                    target='_blank'>
                    <ImLink />
                    <span className='social-text'>direct link</span>
                  </a>
                </li>
              </Fade>
            </ul>
          </div>
          <Fade triggerOnce delay={800}>
            <div className={styles.projectImgWrap}>
              <img
                src='project_1e.png'
                alt='senter-app'
                className={styles.projectImg}
              />
            </div>
          </Fade>
        </article>

        <article
          className={`${styles.projectElement} ${styles.projectElementReverse}`}>
          <div
            className={`${styles.projectTextWrap} ${styles.projectTextWrapReverse}`}>
            <Fade triggerOnce delay={600} cascade>
              <h3 className={styles.projectTitle}>
                School Web App - Fullstack application with administrator panel
                (custom CMS).
              </h3>
              <p className={styles.projectText}>
                This project is a web application with customized Content
                Management System made for a school. Application is divided into
                two parts: read-only user part and administrator panel.
                <br />
                Project was fully created by me, including design.
              </p>
            </Fade>
            <ul className={styles.projectLinks}>
              <Fade triggerOnce cascade delay={800} cascade direction='right'>
                <li id='github'>
                  <a
                    className='social-btn flex-center social-btn-margin'
                    href='https://github.com/mszba/school-web-app'
                    target='_blank'>
                    <ImGithub />
                    <span className='social-text'>github</span>
                  </a>
                </li>
                <li id='link'>
                  <a
                    className='social-btn flex-center '
                    href='https://school-web-app.vercel.app/'
                    target='_blank'>
                    <ImLink />
                    <span className='social-text'>direct link</span>
                  </a>
                </li>
              </Fade>
            </ul>
          </div>
          <Fade triggerOnce delay={800}>
            <div
              className={`${styles.projectImgWrap} ${styles.projectImgWrapReverse}`}>
              <img
                src='project_2.png'
                alt='school-app'
                className={styles.projectImg}
              />
            </div>
          </Fade>
        </article>

        <article className={styles.projectElement}>
          <div className={styles.projectTextWrap}>
            <Fade triggerOnce delay={600} cascade>
              <h3 className={styles.projectTitle}>
                Miodowa-polana - Single Page Application.
              </h3>

              <p className={styles.projectText}>
                This project is a website of a small hotel. Created mainly with
                React and styled-components. <br />
                Project was fully created by me excluding logo.
              </p>
            </Fade>
            <ul className={styles.projectLinks}>
              <Fade triggerOnce cascade delay={800} cascade direction='right'>
                <li id='github'>
                  <a
                    className='social-btn flex-center social-btn-margin'
                    href='https://github.com/mszba/miodowa-polana-website'
                    target='_blank'>
                    <ImGithub />
                    <span className='social-text'>github</span>
                  </a>
                </li>
                <li id='link'>
                  <a
                    className='social-btn flex-center '
                    href='https://miodowa-polana.pl/'
                    target='_blank'>
                    <ImLink />
                    <span className='social-text'>direct link</span>
                  </a>
                </li>
              </Fade>
            </ul>
          </div>
          <Fade triggerOnce delay={800}>
            <div className={styles.projectImgWrap}>
              <img
                src='project_3.png'
                alt='miodowa-polana'
                className={styles.projectImg}
              />
            </div>
          </Fade>
        </article>
      </main>
    </SubpageLayout>
  );
};

export default ProjectsPage;
