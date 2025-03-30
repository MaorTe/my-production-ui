"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface IBackButtonWrapper {
  children: ReactNode;
  backPath: string;
}

export default function BackButtonWrapper({ children, backPath }: IBackButtonWrapper) {
  const router = useRouter();

  const handleBack = () => {
    router.push(backPath);
  };

  return (
    <div>
      <button onClick={handleBack}>← Back</button>
      <div>{children}</div>
    </div>
  );
}
