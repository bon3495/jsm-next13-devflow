import Header from '@/components/shared/header';
import { LeftSidebar, RightSidebar } from '@/components/shared/sidebar';
import { RootLayoutProps } from '@/types/global';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="relative flex flex-1">
        <LeftSidebar />
        <main className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-[140px] max-md:pb-10">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default RootLayout;
