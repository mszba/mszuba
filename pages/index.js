import HomePage from '../components/HomePage';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout pageTitle='Home'>
      <HomePage />
    </DefaultLayout>
  );
}
