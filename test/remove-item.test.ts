import "jest-extended";
import removeItem from "../src/array/remove-item";
describe("Remove item from array", () => {
  test("should return empty array", () => {
    expect(removeItem([], "")).toBeArrayOfSize(0);
    expect(removeItem([], "a")).toBeArrayOfSize(0);
  });

  test("should return non-excluded items", () => {
    expect(removeItem(["a", "b", "c", "d"], "b")).toIncludeAllMembers([
      "a",
      "c",
      "d",
    ]);
    expect(removeItem(["a", "c", "d"], "b")).toIncludeAllMembers([
      "a",
      "c",
      "d",
    ]);
  });

  test("should return all items", () => {
    expect(removeItem(["a", "b", "c", "d"], "e")).toIncludeAllMembers([
      "a",
      "b",
      "c",
      "d",
    ]);
    expect(removeItem(["a", "c", "d"], "b")).toIncludeAllMembers([
      "a",
      "c",
      "d",
    ]);
  });

  test("should not mix types", () => {
    expect(removeItem(["a", "b", 3, "4"], 4)).toIncludeAllMembers([
      "a",
      "b",
      3,
      "4",
    ]);
    expect(removeItem(["a", "c", "d"], "b")).toIncludeAllMembers([
      "a",
      "c",
      "d",
    ]);
  });

  test("should remove empty string", () => {
    expect(removeItem(["", "a"], "")).toIncludeAllMembers(["a"]);
    expect(removeItem([""], "")).toIncludeAllMembers([]);
  });

  test("should remove only the first matching item", () => {
    expect(removeItem([1, 1, 1], 1)).toBeArrayOfSize(2);
    expect(removeItem(["a", 1, "a"], "a")).toIncludeAllMembers(["a", 1]);
  });

  test("should remove all matching items", () => {
    expect(removeItem([1, 1, 1], 1, true)).toBeArrayOfSize(0);
    expect(removeItem([1, "a", 1], 1)).toIncludeAllMembers(["a"]);
  });
});
