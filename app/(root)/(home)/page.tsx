import { HomeContent, HomeHeader } from '@/containers/home/components';
import { DUMMY_QUESTIONS } from '@/mocks/questions';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeContent questions={DUMMY_QUESTIONS} />
    </>
  );
};

export default Home;
