import type { ReactNode } from "react";

import { RightRail } from "~/components/RightRail";
import { SideNav } from "~/components/SideNav";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen justify-center bg-chirp-page">
      <div className="flex w-full max-w-[1100px]">
        <SideNav />
        <div className="w-full min-h-screen max-w-[598px] border-x border-chirp-line bg-white shadow-sm">
          {children}
        </div>
        <RightRail />
      </div>
    </div>
  );
};