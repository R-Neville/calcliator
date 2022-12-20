import getHomePage from './utils/getHomePage';

describe('DEL button', () => {
  it('should successively delete the last character until there are no characters left', async () => {
    const homePage = getHomePage();

    await homePage.clickControlByText('1');
    await homePage.clickControlByText('2');
    await homePage.clickControlByText('3');
    await homePage.clickControlByText('4');
    await homePage.clickControlByText('5');

    let calculationText = await homePage.getCalculationText();

    expect(calculationText.length).toBe(5);

    await homePage.undo();

    calculationText = await homePage.getCalculationText();

    expect(calculationText.length).toBe(4);

    await homePage.undo();

    calculationText = await homePage.getCalculationText();

    expect(calculationText.length).toBe(3);

    await homePage.undo();

    calculationText = await homePage.getCalculationText();

    expect(calculationText.length).toBe(2);

    await homePage.undo();

    calculationText = await homePage.getCalculationText();

    expect(calculationText.length).toBe(1);

    await homePage.undo();

    calculationText = await homePage.getCalculationText();

    expect(calculationText.length).toBe(0);
  });
});

describe('CLR button', () => {
  it('should clear the calculation text and reset the result to zero', async () => {
    const homePage = getHomePage();

    await homePage.clickControlByText('1');
    await homePage.clickControlByText('+');
    await homePage.clickControlByText('1');

    await homePage.evaluate();

    let resultText = await homePage.getResultText();

    expect(parseInt(resultText)).toBe(1 + 1);

    await homePage.clear();

    const calculationText = await homePage.getCalculationText();
    expect(calculationText.length).toBe(0);

    resultText = await homePage.getResultText();
    expect(resultText).toBe('0');
  });
});
