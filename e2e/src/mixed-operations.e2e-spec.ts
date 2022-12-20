import getHomePage from './utils/getHomePage';

describe('Mixed operations', () => {
  describe('ADD --> SUBTRACT', () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigit;
      const op2 = homePage.randomDigit;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('+');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('-');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseInt(resultText)).toBe(op1 + op2 - op3);
    });
  });

  describe('ADD --> DIVIDE', () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigitNotZero;
      const op2 = homePage.randomDigitNotZero;
      const op3 = homePage.randomDigitNotZero;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('+');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('/');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseFloat(resultText)).toBe(op1 + op2 / op3);
    });
  });

  describe('ADD --> MULTIPLY', () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigit;
      const op2 = homePage.randomDigit;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('+');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('*');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseInt(resultText)).toBe(op1 + op2 * op3);
    });
  });

  describe('SUBTRACT --> ADD', () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigit;
      const op2 = homePage.randomDigit;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('-');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('+');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseInt(resultText)).toBe(op1 - op2 + op3);
    });
  });

  describe('SUBTRACT --> DIVIDE', () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigitNotZero;
      const op2 = homePage.randomDigitNotZero;
      const op3 = homePage.randomDigitNotZero;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('-');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('/');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseFloat(resultText)).toBe(op1 - op2 / op3);
    });
  });

  describe('SUBTRACT --> MULTIPLY', () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigit;
      const op2 = homePage.randomDigit;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('-');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('*');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseInt(resultText)).toBe(op1 - op2 * op3);
    });
  });

  describe("MULTIPLY --> ADD", () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigit;
      const op2 = homePage.randomDigit;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('*');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('+');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseInt(resultText)).toBe(op1 * op2 + op3);
    });
  });

  describe("MULTIPLY --> SUBTRACT", () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigit;
      const op2 = homePage.randomDigit;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('*');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('-');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseInt(resultText)).toBe(op1 * op2 - op3);
    });
  });

  describe("MULTIPLY --> DIVIDE", () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigitNotZero;
      const op2 = homePage.randomDigitNotZero;
      const op3 = homePage.randomDigitNotZero;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('*');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('/');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseFloat(resultText)).toBe(op1 * op2 / op3);
    });
  });

  describe("DIVIDE --> ADD", () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigitNotZero;
      const op2 = homePage.randomDigitNotZero;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('/');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('+');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseFloat(resultText)).toBe(op1 / op2 + op3);
    });
  });

  describe("DIVIDE --> SUBTRACT", () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigitNotZero;
      const op2 = homePage.randomDigitNotZero;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('/');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('-');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseFloat(resultText)).toBe(op1 / op2 - op3);
    });
  });

  describe("DIVIDE --> MULTIPLY", () => {
    it('should display the correct result', async () => {
      const homePage = getHomePage();

      const op1 = homePage.randomDigitNotZero;
      const op2 = homePage.randomDigitNotZero;
      const op3 = homePage.randomDigit;

      await homePage.clickControlByText(op1.toString());
      await homePage.clickControlByText('/');
      await homePage.clickControlByText(op2.toString());
      await homePage.clickControlByText('*');
      await homePage.clickControlByText(op3.toString());

      await homePage.evaluate();

      const resultText = await homePage.getResultText();

      expect(parseFloat(resultText)).toBe(op1 / op2 * op3);
    });
  });
});
