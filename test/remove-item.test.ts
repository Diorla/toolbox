import "jest-extended";
import removeItem from "../src/array/remove-item";
import Chance from "chance";

const chance = new Chance();

describe("Remove item from array", () => {
  const emptyArr: string[] = [];
  const emptyStr = "";
  const a = "";

  test("should return empty array", () => {
    expect(removeItem(emptyArr, emptyStr)).toBeArrayOfSize(0);
    expect(removeItem(emptyArr, a)).toBeArrayOfSize(0);
  });

  const one = chance.character({ pool: "abcde" });
  const two = chance.character({ pool: "fghij" });
  const three = chance.character({ pool: "klmno" });
  const four = chance.character({ pool: "pqrst" });
  const five = chance.character({ pool: "uvwxy" });
  const six = chance.character({ pool: "z1234" });
  const stringNum = chance.character({ numeric: true });
  const num = Number(stringNum);

  test("should return non-excluded items", () => {
    expect(
      removeItem([one, two, three, four, five, six], three)
    ).toIncludeAllMembers([one, two, four, five, six]);
    expect(
      removeItem([one, two, three, four, five, six], one)
    ).toIncludeAllMembers([two, three, four, five, six]);
  });

  test("should return all items", () => {
    expect(removeItem([one, two, three, four, five], six)).toIncludeAllMembers([
      one,
      two,
      three,
      four,
      five,
    ]);
    expect(removeItem([two, three, four, five, six], one)).toIncludeAllMembers([
      two,
      three,
      four,
      five,
      six,
    ]);
  });

  test("should not mix types", () => {
    expect(
      removeItem([one, two, num, three, stringNum], num)
    ).toIncludeAllMembers([one, two, three, stringNum]);
    expect(
      removeItem([one, two, num, three, stringNum], stringNum)
    ).toIncludeAllMembers([one, two, num, three]);
  });

  test("should remove empty string", () => {
    expect(removeItem([emptyStr, one], emptyStr)).toIncludeAllMembers([one]);
    expect(removeItem([emptyStr], emptyStr)).toIncludeAllMembers(emptyArr);
  });

  test("should remove only the first matching item", () => {
    expect(removeItem([one, one, one], one)).toBeArrayOfSize(2);
    expect(
      removeItem([stringNum, num, stringNum], stringNum)
    ).toIncludeAllMembers([num, stringNum]);
  });

  test("should remove all matching items", () => {
    expect(
      removeItem([stringNum, stringNum, stringNum], stringNum, true)
    ).toBeArrayOfSize(0);
    expect(removeItem([num, stringNum, num], num)).toIncludeAllMembers([
      stringNum,
    ]);
  });
});
