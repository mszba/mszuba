import { NextSeo } from 'next-seo';
import styles from '../styles/DefaultLayout.module.css';

const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <>
      <NextSeo
        title={pageTitle}
        titleTemplate='%s | Marek Szuba | Frontend Developer'
        defaultTitle='Marek Szuba | Frontend Developer'
        description='I am hardworking, ambitious and conscientious Frontend Developer. I am
    passionate about web technologies and software architecture.'
        canonical='https://mszuba.vercel.app/'
      />

      <div className={styles.container}>{children}</div>
    </>
  );
};

export default DefaultLayout;
