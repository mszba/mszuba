import { useState } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '../../layouts/SubpageLayout';
import styles from './ContactmePage.module.css';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactmePage = () => {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    setIsLoading(false);
    if (response.status === 200) {
      setIsSubmitted(true);
      setFormData({
        ...formData,
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <SubpageLayout>
      <header className={styles.header}>
        <motion.h1 className={styles.title} layoutId='contactTitle'>
          Contact me
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
          I'm seeking out job opportunity to put my skills to use and enhance my
          knowledge and experience in the IT industry. If you’d like to get in
          touch, please fill in the form below.
        </motion.h2>
      </header>
      <main className={styles.main}>
        <motion.form
          className={styles.form}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}>
          {isSubmitted ? (
            <div className='success-animation'>
              <svg
                className='checkmark'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 52 52'>
                <circle
                  className='checkmark__circle'
                  cx='26'
                  cy='26'
                  r='25'
                  fill='none'
                />
                <path
                  className='checkmark__check'
                  fill='none'
                  d='M14.1 27.2l7.1 7.2 16.7-16.8'
                />
              </svg>
              <motion.p
                className={styles.successMessage}
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.165, 0.84, 0.44, 1],
                }}>
                Thank you for getting in touch! I will get back to you soon!
              </motion.p>
            </div>
          ) : (
            <>
              <div className={styles.nameEmailWrap}>
                <input
                  name='name'
                  onChange={handleChange}
                  value={formData.name}
                  type='text'
                  placeholder='Name'
                  className={styles.nameEmailInput}
                  required
                />
                <input
                  name='email'
                  onChange={handleChange}
                  value={formData.email}
                  type='email'
                  placeholder='Email'
                  className={styles.nameEmailInput}
                  required
                />
              </div>
              <input
                name='subject'
                onChange={handleChange}
                value={formData.subject}
                type='text'
                placeholder='Subject'
                className={styles.subjectInput}
                required
              />
              <textarea
                name='message'
                onChange={handleChange}
                value={formData.message}
                placeholder='Message'
                className={styles.messageInput}
                required
              />
              <div className={styles.buttonWrap}>
                <button
                  type='submit'
                  disabled={isLoading}
                  className={styles.formButton}>
                  {isLoading ? (
                    <svg viewBox='0 0 50 50' className='loadingSpinner'>
                      <circle
                        className='path'
                        cx='25'
                        cy='25'
                        r='20'
                        fill='none'
                        strokeWidth='4'
                      />
                    </svg>
                  ) : (
                    'Send message'
                  )}
                </button>
              </div>{' '}
            </>
          )}
        </motion.form>
      </main>
    </SubpageLayout>
  );
};

export default ContactmePage;
