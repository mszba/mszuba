import { motion } from 'framer-motion';
import SubpageLayout from '../../layouts/SubpageLayout';
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
              tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quas magnam eaque consequuntur iure doloribus a totam
              adipisci ullam! Quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolores tempore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequatur quas magnam eaque
              consequuntur iure doloribus a totam adipisci ullam! Quibusdam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quas magnam eaque consequuntur iure doloribus a totam
              adipisci ullam! Quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolores tempore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequatur quas magnam eaque
              consequuntur iure doloribus a totam adipisci ullam! Quibusdam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              tempore.
            </p>
            <div className={styles.projectLinks}>
              <a href='#' className={styles.projectlink}>
                GitHub
              </a>
              <a href='#' className={styles.projectlink}>
                Link
              </a>
            </div>
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
