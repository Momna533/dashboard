import React from 'react';
import SideNav from '../ui/dashboard/sidenav';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
