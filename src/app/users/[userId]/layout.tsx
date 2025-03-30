import BackButtonWrapper from "@/app/components/back-button-wrapper/BackButtonWrapper";

interface LayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: LayoutProps) {
  return <BackButtonWrapper backPath="/">{children}</BackButtonWrapper>;
}
