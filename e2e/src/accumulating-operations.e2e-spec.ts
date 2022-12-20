import getHomePage from "./utils/getHomePage";

describe('Accumulating operations', () => {
  describe('1 + 2 - 4 / 8 * 10', () => {
    it('should produce the correct result after each operation is added', async () => {
      const homePage = getHomePage();

      await homePage.clickControlByText('1');
      await homePage.clickControlByText('+');
      await homePage.clickControlByText('2');

      await homePage.evaluate();

      let resultText = await homePage.getResultText();

      expect(parseInt(resultText)).toBe(1 + 2);

      await homePage.clickControlByText('-');
      await homePage.clickControlByText('4');

      await homePage.evaluate();

      resultText = await homePage.getResultText();

      expect(parseInt(resultText)).toBe(1 + 2 -4);

      await homePage.clickControlByText('/');
      await homePage.clickControlByText('8');

      await homePage.evaluate();

      resultText = await homePage.getResultText();

      expect(parseFloat(resultText)).toBe(1 + 2 - 4 / 8);

      await homePage.clickControlByText('*');
      await homePage.clickControlByText('1');
      await homePage.clickControlByText('0');

      await homePage.evaluate();

      resultText = await homePage.getResultText();

      expect(parseFloat(resultText)).toBe(1 + 2 - 4 / 8 * 10);
    })
  });
});