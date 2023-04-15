import { nameValidation } from '../pages/FormsPage/components/Form/utils';


describe('Name', () => {
  it("must consist of 2 words", () => {
    const testCases = [
      { a: "qwerty jk", expected: false },
      { a: "Qwerty AQ", expected: true },
      { a: " Jk KK", expected: true },
      { a: " JkKK", expected: false },
    ];
    testCases.forEach(({ a, expected }) => {
      const result = nameValidation(a);
      expect(result).toEqual(expected);
    });
  });
})
