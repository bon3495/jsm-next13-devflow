import { getQuestions } from '@/actions/question';
import { HomeContent, HomeHeader } from '@/containers/home/components';

const Home = async () => {
  const questionsList = await getQuestions({});

  return (
    <>
      <HomeHeader />
      <HomeContent questions={questionsList.data} />
    </>
  );
};

export default Home;
