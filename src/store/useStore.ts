import { create } from "zustand";

interface AppState {
  currentTopic: string;
  currentSubTopic: string;
  setTopic: (topic: string) => void;
  setSubTopic: (subTopic: string) => void;
}

export const useStore = create<AppState>((set) => ({
  currentTopic: "Linear Algebra",
  currentSubTopic: "Vectors",
  setTopic: (topic) => set({ currentTopic: topic }),
  setSubTopic: (subTopic) => set({ currentSubTopic: subTopic }),
}));
