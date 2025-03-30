"use client";

import Toast from "./components/toast/Toast";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <div>
      <UsersPage />
      <Toast />
    </div>
  );
}
