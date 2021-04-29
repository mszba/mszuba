import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import SubpageLayout from '../../layouts/SubpageLayout';
import styles from './ProjectsPage.module.css';
import 'swiper/swiper-bundle.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import { projectsData } from './projectsData';

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
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          wrapperTag='ul'
          navigation={{
            nextEl: '.swiper-button-next-unique',
            prevEl: '.swiper-button-prev-unique',
          }}
          pagination
          autoplay={{ delay: 5000 }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {projectsData.map((project, id) => (
            <SwiperSlide
              key={id}
              tag='li'
              style={{ listStyle: 'none', maxWidth: '800px' }}>
              <article className={styles.projectElement}>
                <div className={styles.projectTextWrap}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectText}>{project.text}</p>
                  <div className={styles.projectLinks}>
                    <a href={project.githubLink} className={styles.projectlink}>
                      GitHub
                    </a>
                    <a href={project.directLink} className={styles.projectlink}>
                      Link
                    </a>
                  </div>
                </div>
                <div className={styles.projectImgWrap}>
                  <div className={styles.projectImg}></div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <HiOutlineChevronLeft className='swiper-button-prev-unique'></HiOutlineChevronLeft>
        <HiOutlineChevronRight className='swiper-button-next-unique'></HiOutlineChevronRight>
      </main>
    </SubpageLayout>
  );
};

export default ProjectsPage;
