import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full max-w-[1250px] mx-auto">
      <div>{children}</div>
    </div>
  );
};

export default Container;
