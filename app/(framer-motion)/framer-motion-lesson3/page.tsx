'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const Page = () => {
  const { scrollY } = useScroll();
  console.log({ scrollY });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });

  return (
    <div className="mx-auto flex w-full flex-1 flex-col bg-white text-slate-600">
      <motion.header style={{ height: scrollY }} className="fixed inset-x-0 flex h-20 bg-background-lighter shadow">
        <div className="mx-auto flex w-full items-center justify-between px-8">
          <p className="flex origin-left items-center text-xl font-semibold uppercase">
            <span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]">The</span>
            <span className="-ml-1 text-2xl tracking-[-.075em]">Daily Bugle</span>
          </p>
          <nav className="flex space-x-4 text-xs font-medium text-slate-400">
            <a href="#">News</a>
            <a href="#">Sports</a>
            <a href="#">Culture</a>
          </nav>
        </div>
      </motion.header>

      <main className="px-8 pt-28">
        <h1 className="h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold" />
        <div className="mt-8 space-y-6">
          {Array.from(Array(2).keys()).map((i) => (
            <div key={i} className="space-y-2 text-sm">
              <p className="h-4 w-5/6 rounded bg-slate-200" />
              <p className="h-4 rounded bg-slate-200" />
              <p className="h-4 w-4/6 rounded bg-slate-200" />
            </div>
          ))}
          <div className="h-64 rounded bg-slate-200"></div>
          {Array.from(Array(90).keys()).map((i) => (
            <div key={i} className="space-y-2 text-sm">
              <p className="h-4 w-5/6 rounded bg-slate-200" />
              <p className="h-4 rounded bg-slate-200" />
              <p className="h-4 w-4/6 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
