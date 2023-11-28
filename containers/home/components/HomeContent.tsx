import { HomeNotFound, QuestionCard, QuestionsList } from '@/containers/home/components';
import { CardQuestionType } from '@/containers/home/types';

interface HomeContentProps {
  questions: CardQuestionType[];
}

const HomeContent = ({ questions }: HomeContentProps) => {
  if (questions.length === 0) return <HomeNotFound />;

  return (
    <QuestionsList>
      {questions.map((question) => {
        return <QuestionCard key={question._id} question={question} />;
      })}
    </QuestionsList>
  );
};

export default HomeContent;
