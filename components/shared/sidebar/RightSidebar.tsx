import Link from 'next/link';

import { SidebarWrapper } from '@/components/shared/sidebar';
import { Badge } from '@/components/ui/badge';
import { ROUTES_NAME } from '@/constants/routes';

const TOP_QUESTIONS = [
  {
    title: 'What is Next.js?',
    _id: 1,
  },
  {
    title: ' Main Features',
    _id: 2,
  },
  {
    title: 'How to Use These Docs',
    _id: 3,
  },
  {
    title: 'App Router vs Pages Router',
    _id: 4,
  },
  {
    title: 'Pre-Requisite Knowledge',
    _id: 5,
  },
  {
    title: 'Accessibility',
    _id: 6,
  },
  {
    title: 'Join our Community',
    _id: 7,
  },
];

const POPULAR_TAGS = [
  {
    _id: 1,
    name: 'Javascript',
    totalQuestions: 250,
  },
  {
    _id: 2,
    name: 'Next.js',
    totalQuestions: 157,
  },
  {
    _id: 3,
    name: 'Typescript',
    totalQuestions: 89,
  },
  {
    _id: 4,
    name: 'Vite',
    totalQuestions: 8,
  },
  {
    _id: 5,
    name: 'Redux',
    totalQuestions: 11,
  },
  {
    _id: 6,
    name: 'Tailwindcss',
    totalQuestions: 1587,
  },
  {
    _id: 7,
    name: 'React',
    totalQuestions: 35671,
  },
];

const RightSidebar = () => {
  return (
    <SidebarWrapper className="right-0 border-l max-xl:hidden">
      <section>
        <h3 className="mb-4 text-lg font-semibold">Top Questions</h3>
        <ul className="flex flex-col gap-y-3">
          {TOP_QUESTIONS.map((item) => (
            <li key={item._id} className="flex">
              <Link
                href={`${ROUTES_NAME.QUESTIONS}/${item._id}`}
                className="text-sm transition-all hover:text-contrast-medium hover:underline dark:hover:text-primary-light"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h3 className="mb-4 text-lg font-semibold">Popular Tags</h3>
        <ul className="inline-flex flex-wrap gap-2">
          {POPULAR_TAGS.map((item) => (
            <li key={item._id} className="flex">
              <Link
                href={`${ROUTES_NAME.TAGS}/${item._id}`}
                className="text-sm transition-all hover:text-contrast-medium hover:underline dark:hover:text-primary-light"
              >
                <Badge variant="tag">{item.name}</Badge>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SidebarWrapper>
  );
};

export default RightSidebar;
