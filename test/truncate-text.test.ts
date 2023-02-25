import truncateText from "../src/string/truncate-text";
import Chance from "chance";

const chance = new Chance();

describe("truncating text", () => {
  test("should return empty string", () => {
    expect(truncateText("")).toBe("");
    expect(truncateText("", 10000)).toBe("");
  });

  test("should return all text", () => {
    const length = chance.integer({ min: 10, max: 30 });
    const text = chance.word({
      length,
    });
    expect(truncateText("1234567890")).toBe("1234567890");
    expect(truncateText(text, length)).toBe(text);
  });

  test("should truncate all text", () => {
    const text = chance.word({
      length: chance.integer({ min: 5, max: 20 }),
    });
    expect(truncateText("", 0)).toBe("");
    expect(truncateText(text, 0)).toBe("...");
  });

  test("should truncate only the text", () => {
    const baseLength = chance.integer({
      min: 5,
      max: 10,
    });
    const extraLength = chance.integer({
      min: 5,
      max: 10,
    });
    const baseText = chance.word({
      length: baseLength,
    });
    const extraText = chance.word({
      length: extraLength,
    });
    expect(truncateText(baseText + extraText, baseLength)).toBe(
      baseText + "..."
    );
    expect(truncateText(extraText + baseText, extraLength)).toBe(
      extraText + "..."
    );
  });
});
