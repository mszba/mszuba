import styles from '../styles/DefaultLayout.module.css';

const DefaultLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default DefaultLayout;
