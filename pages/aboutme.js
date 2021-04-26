import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DefaultLayout from '../layouts/DefaultLayout';

const AboutMe = () => {
  return (
    <DefaultLayout>
      <motion.h1 style={{ fontSize: '23px', color: '#fff' }} layoutId='title'>
        Test of the animated Title about me
      </motion.h1>
      <Link href='/'>
        <a style={{ color: '#fff' }}>HOME</a>
      </Link>
    </DefaultLayout>
  );
};

export default AboutMe;
