import camelCaseToSnakeCase from "./utils";

const TEST_CASES = [
  ["", ""],
  ["helloWorld", "hello_world"],
  ["JackSparrow", "jack_sparrow"],
];

describe("#camelCaseToSnakeCase", () => {
  test.each(TEST_CASES)("given %s string, returns %s snake_cased", (inputStr, snakeCaseExpectedStr) =>
    expect(camelCaseToSnakeCase(inputStr)).toEqual(snakeCaseExpectedStr),
  );
});
