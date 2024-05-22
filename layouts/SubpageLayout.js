import Link from 'next/link';
import styles from './SubpageLayout.module.css';

const SubpageLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <button className={styles.backButton}>
        <Link href='/' style={{ color: '#fff' }}>
          &#10229;
        </Link>
      </button>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default SubpageLayout;
