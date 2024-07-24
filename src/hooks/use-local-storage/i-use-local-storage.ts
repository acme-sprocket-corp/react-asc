export default interface IUseLocalStorage {
  addItem: (key: string, item: string) => void;
  getItem: (key: string) => string;
  removeItem: (key: string) => void;
}
