import { browser } from 'protractor';
import getHomePage from './utils/getHomePage';

describe('Multiplication', () => {
  it('should display an alert when used with only a first operand', async () => {
    const homePage = getHomePage();

    const op1 = homePage.randomDigit;

    await homePage.clickControlByText(op1.toString());
    await homePage.clickControlByText('*');

    await homePage.evaluate();

    const alert = await browser.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).toBe('Invalid arithmetic expression');
    alert.dismiss();

    const resultText = await homePage.getResultText();
    expect(resultText).toBe('0');
  });

  it('should display the correct result with two operands', async () => {
    const homePage = getHomePage();

    const op1 = homePage.randomDigit;
    const op2 = homePage.randomDigit;

    await homePage.clickControlByText(op1.toString());
    await homePage.clickControlByText('*');
    await homePage.clickControlByText(op2.toString());
    await homePage.evaluate();

    const resultText = await homePage.getResultText();

    expect(parseInt(resultText)).toBe(op1 * op2);
  });

  it('should display the correct result with 3 operands', async () => {
    const homePage = getHomePage();

    const op1 = homePage.randomDigit;
    const op2 = homePage.randomDigit;
    const op3 = homePage.randomDigit;

    await homePage.clickControlByText(op1.toString());
    await homePage.clickControlByText('*');
    await homePage.clickControlByText(op2.toString());
    await homePage.clickControlByText('*');
    await homePage.clickControlByText(op3.toString());

    await homePage.evaluate();

    const resultText = await homePage.getResultText();

    expect(parseInt(resultText)).toBe(op1 * op2 * op3);
  });
});
