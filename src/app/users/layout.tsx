"use client";

import React from "react";
import Toast from "../components/toast/Toast";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
      <Toast />
    </div>
  );
}
