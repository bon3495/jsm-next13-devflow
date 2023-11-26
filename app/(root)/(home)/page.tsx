import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { ROUTES_NAME } from '@/constants/routes';
import HomeHeader from '@/containers/home/HomeHeader';

const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">All Questions</h1>
        <Link href={ROUTES_NAME.ASK_QUESTION} className={buttonVariants({ variant: 'primary', className: 'w-fit' })}>
          Ask a Question
        </Link>
      </div>
      <HomeHeader />
    </>
  );
};

export default Home;
