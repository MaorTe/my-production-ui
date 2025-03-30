import { create } from "zustand";

interface IStore {
  users: Array<any>;
  setUsers: Function;
  toastData: {
    message: string;
    display: boolean;
  };
  setToastData: Function;
}

const useStore = create<IStore>((set) => ({
  users: [],
  setUsers: (users: Array<any>) => set((state) => ({ ...state, users })),
  toastData: {
    message: "",
    display: false,
  },
  setToastData: (toastData: IStore["toastData"]) => set((state) => ({ ...state, toastData })),
}));

export default useStore;
