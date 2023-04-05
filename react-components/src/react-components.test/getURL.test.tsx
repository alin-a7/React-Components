import { getURL } from '../pages/CardsPage/utils';

describe('Function', () => {
  it("return the correct URL", () => {
    const BASE_URL = 'https://rickandmortyapi.com/api/character'

    const testCases = [
      { a: "", expected: BASE_URL },
      { a: "rick", expected: `${BASE_URL}/?name=rick` },
    ];
    testCases.forEach(({ a, expected }) => {
      const result = getURL(a);
      expect(result).toEqual(expected);
    });
  });
})
