import removeIndex from "../src/array/remove-index";
import "jest-extended";
import Chance from "chance";

const chance = new Chance();

describe("remove target index from array", () => {
  const one = chance.character({ pool: "abcde" });
  const two = chance.character({ pool: "fghij" });
  const three = chance.character({ pool: "klmno" });
  const four = chance.character({ pool: "pqrst" });
  const five = chance.character({ pool: "uvwxy" });

  test("should leave empty array", () => {
    const num = Number(chance.character({ numeric: true }));
    expect(removeIndex([], num)).toBeArrayOfSize(0);
  });

  test("should not affect array", () => {
    const num = 6 + Number(chance.character({ numeric: true }));
    expect(removeIndex([one, two, three, four, five], num)).toBeArrayOfSize(5);
    expect(
      removeIndex([one, two, three, four, five], num)
    ).toIncludeAllMembers([one, two, three, four, five]);
  });

  test("should remove particular item", () => {
    expect(removeIndex([one, two, three, four, five], 0)).toIncludeAllMembers([
      two,
      three,
      four,
      five,
    ]);
    expect(removeIndex([one, two, three, four, five], 1)).toIncludeAllMembers([
      one,
      three,
      four,
      five,
    ]);
    expect(removeIndex([one, two, three, four, five], 2)).toIncludeAllMembers([
      one,
      two,
      four,
      five,
    ]);
    expect(removeIndex([one, two, three, four, five], 3)).toIncludeAllMembers([
      one,
      two,
      three,
      five,
    ]);
    expect(removeIndex([one, two, three, four, five], 4)).toIncludeAllMembers([
      one,
      two,
      three,
      four,
    ]);
  });

  test("should handle negative numbers", () => {
    expect(removeIndex([one, two, three, four, five], -1)).toIncludeAllMembers([
      one,
      two,
      three,
      four,
      five,
    ]);
    expect(removeIndex([one, two, three, four, five], -2)).toIncludeAllMembers([
      one,
      two,
      three,
      four,
      five,
    ]);
  });
});
