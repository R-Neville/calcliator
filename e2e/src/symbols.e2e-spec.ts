import getHomePage from "./utils/getHomePage";
import getAlertTextAndDismiss from "./utils/getAlertTextAndDismiss";

describe('Symbols', () => {
  describe('+', () => {
    it('should display error alert when no operands are provided', async () => {
      const homePage = getHomePage();

      await homePage.clickControlByText('+');
      await homePage.evaluate();
      
      const alertText = await getAlertTextAndDismiss();

      expect(alertText).toBe("Invalid arithmetic expression");
    });
  });

  describe('-', () => {
    it('should display error alert when no operands are provided', async () => {
      const homePage = getHomePage();

      await homePage.clickControlByText('-');
      await homePage.evaluate();
      
      const alertText = await getAlertTextAndDismiss();

      expect(alertText).toBe("Invalid arithmetic expression");
    });
  });

  describe('*', () => {
    it('should display error alert when no operands are provided', async () => {
      const homePage = getHomePage();

      await homePage.clickControlByText('*');
      await homePage.evaluate();
      
      const alertText = await getAlertTextAndDismiss();

      expect(alertText).toBe("Invalid arithmetic expression");
    });
  });

  describe('/', () => {
    it('should display error alert when no operands are provided', async () => {
      const homePage = getHomePage();

      await homePage.clickControlByText('/');
      await homePage.evaluate();
      
      const alertText = await getAlertTextAndDismiss();

      expect(alertText).toBe("Invalid arithmetic expression");
    });
  });
});