import useStore from "@/app/store/useStore";
import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

export default function Toast() {
  const { toastData, setToastData } = useStore();
  const notify = () => toast(toastData.message);

  useEffect(() => {
    if (toastData.display) {
      notify();
      setToastData({ ...toastData, display: false });
    }
  }, [toastData.display]);

  return <ToastContainer />;
}
