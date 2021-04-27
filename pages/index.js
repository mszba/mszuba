import Head from 'next/head';
import HomePage from '../components/HomePage';

import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
    </DefaultLayout>
  );
}
