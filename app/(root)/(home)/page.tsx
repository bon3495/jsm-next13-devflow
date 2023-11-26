import Link from 'next/link';

import { LocalSearchBar } from '@/components/shared/search';
import { buttonVariants } from '@/components/ui/button';
import { ROUTES_NAME } from '@/constants/routes';

const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">All Questions</h1>
        <Link href={ROUTES_NAME.ASK_QUESTION} className={buttonVariants({ variant: 'primary', className: 'w-fit' })}>
          Ask a Question
        </Link>
      </div>
      <section className="mt-10 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
        // route={ROUTES_NAME.HOME}
        />
        <div>Filter</div>
      </section>
    </>
  );
};

export default Home;
