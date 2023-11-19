import { Navbar } from '@/components/shared/navbar';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <main className="relative mt-[72px] bg-background">
        <div className="flex">
          LeftSidebar
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
            <div className="mx-auto w-full max-w-5xl">
              <div className="grid grid-cols-6 gap-x-4">
                <Button>Primary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
          </section>
          RightSidebar
        </div>
      </main>
      Toaster
    </>
  );
};

export default Home;
