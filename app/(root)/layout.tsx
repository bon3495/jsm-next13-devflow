import { Navbar } from '@/components/shared/navbar';
import { LeftSidebar, RightSidebar } from '@/components/shared/sidebar';
import { RootLayoutProps } from '@/types/global';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky inset-x-0 top-0 z-50 h-header border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-background-lighter">
        <Navbar />
      </header>
      <main className="relative flex flex-1">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-4 pb-6 pt-10 max-md:pb-10">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
};

export default RootLayout;
