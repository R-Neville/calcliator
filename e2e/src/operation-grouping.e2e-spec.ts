import getHomePage from "./utils/getHomePage";

describe('Operation grouping', () => {
  describe('1 / (3 + 7) * (6 - 4 / 8)', () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      await homePage.clickControlByText('1');
      await homePage.clickControlByText('/');
      await homePage.clickControlByText('(');
      await homePage.clickControlByText('3');
      await homePage.clickControlByText('+');
      await homePage.clickControlByText('7');
      await homePage.clickControlByText(')');
      await homePage.clickControlByText('*');
      await homePage.clickControlByText('(');
      await homePage.clickControlByText('6');
      await homePage.clickControlByText('-');
      await homePage.clickControlByText('4');
      await homePage.clickControlByText('/');
      await homePage.clickControlByText('8');
      await homePage.clickControlByText(')');

      await homePage.evaluate();

      const resultText = await homePage.getResultText();
      expect(parseFloat(resultText)).toBe(1 / (3 + 7) * (6 - 4 / 8));
    });
  });
});