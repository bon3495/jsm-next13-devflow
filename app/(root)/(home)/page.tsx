import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="grid grid-cols-6 gap-x-4">
      <Button>Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};

export default Home;
