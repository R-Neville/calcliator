import getAlertTextAndDismiss from './utils/getAlertTextAndDismiss';
import getHomePage from './utils/getHomePage';

describe('Division', () => {
  it('should display an alert when used with only a first operand', async () => {
    const homePage = getHomePage();

    const op1 = homePage.randomDigit;

    await homePage.clickControlByText(op1.toString());
    await homePage.clickControlByText('/');

    await homePage.evaluate();

    const alertText = await getAlertTextAndDismiss();
    expect(alertText).toBe('Invalid arithmetic expression');

    const resultText = await homePage.getResultText();
    expect(resultText).toBe('0');
  });

  it('should display Infinity when the second operand is zero', async () => {
    const homePage = getHomePage();

    const op1 = homePage.randomDigitNotZero;

    await homePage.clickControlByText(op1.toString());
    await homePage.clickControlByText('/');
    await homePage.clickControlByText('0');
  
    await homePage.evaluate();

    const resultText = await homePage.getResultText();
    expect(resultText).toBe('Infinity');
  });

  it('should display NaN when both operands are zero', async () => {
    const homePage = getHomePage();

    await homePage.clickControlByText('0');
    await homePage.clickControlByText('/');
    await homePage.clickControlByText('0');

    await homePage.evaluate();

    const resultText = await homePage.getResultText();
    expect(resultText).toBe('NaN');
  });

  it('should display the correct result with two operands', async () => {
    const homePage = getHomePage();

    const op1 = homePage.randomDigit;
    const op2 = homePage.randomDigitNotZero;

    await homePage.clickControlByText(op1.toString());
    await homePage.clickControlByText('/');
    await homePage.clickControlByText(op2.toString());
    await homePage.evaluate();

    const resultText = await homePage.getResultText();

    expect(parseFloat(resultText)).toBe(op1 / op2);
  });

  it('should display the correct result with 3 operands', async () => {
    const homePage = getHomePage();

    const op1 = homePage.randomDigit;
    const op2 = homePage.randomDigitNotZero;
    const op3 = homePage.randomDigitNotZero;

    await homePage.clickControlByText(op1.toString());
    await homePage.clickControlByText('/');
    await homePage.clickControlByText(op2.toString());
    await homePage.clickControlByText('/');
    await homePage.clickControlByText(op3.toString());

    await homePage.evaluate();

    const resultText = await homePage.getResultText();

    expect(parseFloat(resultText)).toBe(op1 / op2 / op3);
  });
});
