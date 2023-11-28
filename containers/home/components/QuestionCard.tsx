import Link from 'next/link';

import { ROUTES_NAME } from '@/constants/routes';
import { CardQuestionType } from '@/containers/home/types';

interface QuestionCardProps {
  question: CardQuestionType;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  console.log(question);
  return (
    <li className="flex rounded-md border border-border">
      <Link href={`${ROUTES_NAME.QUESTIONS}/${question._id}`} className="flex-1 rounded-md p-4">
        <h3 className="line-clamp-2 font-semibold">{question.title}</h3>
      </Link>
    </li>
  );
};

export default QuestionCard;
