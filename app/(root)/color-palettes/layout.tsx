import React from 'react';

import Navbar from '@/components/shared/Navbar';
import { RootLayoutProps } from '@/types/global';

const Layout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-h-screen bg-white p-8">
      <header className="fixed inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <main className="mt-[72px]">{children}</main>
    </div>
  );
};

export default Layout;
