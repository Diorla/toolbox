import arrToSentence from "../src/string/arr-to-sentence";
import "jest-extended";
import Chance from "chance";

const chance = new Chance();

describe("should form sentences from arrays", () => {
  const stringArr: string[] = [];
  const numArr: number[] = [];
  const mixedArr: (string | number)[] = [];
  test("should return empty string", () => {
    // empty Array => "";
    expect(arrToSentence([])).toBe("");
  });
  test("should return a single item", () => {
    const word = chance.word();
    const num = chance.integer();
    stringArr.push(word);
    numArr.push(num);
    expect(arrToSentence(stringArr)).toBe(word);
    expect(arrToSentence(numArr)).toBe(String(num));
    mixedArr.push(word);
    mixedArr.push(num);
  });
  test("should return two items", () => {
    const word = chance.word();
    const num = chance.integer();
    stringArr.push(word);
    numArr.push(num);

    expect(arrToSentence(mixedArr)).toBe(`${mixedArr[0]} and ${mixedArr[1]}`);
    expect(arrToSentence(stringArr)).toBe(`${stringArr[0]} and ${word}`);
    expect(arrToSentence(numArr)).toBe(`${numArr[0]} and ${num}`);
    mixedArr.push(num);
    mixedArr.push(word);
  });
  test("should return three items", () => {
    const word = chance.word();
    const num = chance.integer();
    stringArr.push(word);
    numArr.push(num);
    expect(arrToSentence(stringArr)).toBe(
      `${stringArr[0]}, ${stringArr[1]} and ${word}`
    );
    expect(arrToSentence(numArr)).toBe(`${numArr[0]}, ${numArr[1]} and ${num}`);
    mixedArr.push(word);
    mixedArr.push(num);
  });
  test("should return multiple items", () => {
    expect(arrToSentence(mixedArr)).toBe(
      `${mixedArr[0]}, ${mixedArr[1]}, ${mixedArr[2]}, ${mixedArr[3]}, ${mixedArr[4]} and ${mixedArr[5]}`
    );
  });
});
