import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Project {
  name: string;
  position: string;
}

interface Detail {
  name: string;
  age: number;
  project: Project;
}

interface User {
  id: number;
  detail: Detail;
}

interface UserStore {
  user: User;
  setUserProject: (project: Project) => void;
}

const initUser = {
  id: 1,
  detail: {
    name: "daniel",
    age: 32,
    project: {
      name: "GOTCHA",
      position: "frontend",
    },
  },
};

export const useUserStore = create(
  immer<UserStore>((set) => ({
    user: initUser,
    setUserProject: (project: Project) =>
      // immer를 사용하지 않은 방법
      // set((state) => ({
      //   user: {
      //     ...state.user,
      //     detail: {
      //       ...state.user.detail,
      //       project,
      //     },
      //   },
      // })),

      // immer를 사용한 방법
      set((state) => {
        state.user.detail.project = project;
      }),
  }))
);
