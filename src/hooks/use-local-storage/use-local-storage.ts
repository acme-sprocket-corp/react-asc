import IUseLocalStorage from "./i-use-local-storage";

export default function useLocalStorage(): IUseLocalStorage {
  const addItem = (key: string, item: string): void => {
    localStorage.setItem(key, item);
  };

  const getItem = (key: string): string => {
    return localStorage.getItem(key) ?? "";
  };

  const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };

  return { addItem, getItem, removeItem };
}
