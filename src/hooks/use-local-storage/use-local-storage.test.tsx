import useLocalStorage from "./use-local-storage";

describe("useLocalStorage", () => {
  it("add item", () => {
    const hook = useLocalStorage();

    hook.removeItem("key");

    hook.addItem("key", "item");

    expect(hook.getItem("key")).toBe("item");
  });

  it("get item, with item, returns", () => {
    const hook = useLocalStorage();

    hook.removeItem("key");

    hook.addItem("key", "value");

    expect(hook.getItem("key")).toBe("value");
  });

  it("get item, no item, is empty string", () => {
    const hook = useLocalStorage();

    hook.removeItem("key");

    expect(hook.getItem("key")).toBe("");
  });

  it("remove item", () => {
    const hook = useLocalStorage();

    hook.removeItem("key");

    hook.addItem("key", "value");

    hook.removeItem("key");

    expect(hook.getItem("key")).toBe("");
  });
});
