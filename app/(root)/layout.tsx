import { Navbar } from '@/components/shared/navbar';
import { LeftSidebar, RightSidebar } from '@/components/shared/sidebar';
import { RootLayoutProps } from '@/types/global';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <main className="relative mt-[80px] flex h-[2000px] flex-col bg-background">
        <div className="flex flex-1">
          <LeftSidebar />
          <section className="flex min-h-screen flex-1 flex-col px-4 pb-6 pt-10 max-md:pb-10">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </section>
          <RightSidebar />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
