import type { FC } from 'react';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default Layout;
