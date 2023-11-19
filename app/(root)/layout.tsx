import { Navbar } from '@/components/shared/navbar';
import { RootLayoutProps } from '@/types/global';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <main className="relative mt-[80px] bg-background">
        <div className="flex">
          LeftSidebar
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </section>
          RightSidebar
        </div>
      </main>
      Toaster
    </>
  );
};

export default RootLayout;
