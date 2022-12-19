import { browser, element, by } from 'protractor';

describe('Routing', () => {
  describe('About link', () => {
    it('should direct the user to the About page', async () => {
      browser.get(browser.baseUrl);

      const aboutLink = element(by.linkText('About'));
      await aboutLink.click();

      expect(
        element(by.cssContainingText('p', 'Happy calcliating!'))
      ).toBeTruthy();
    });
  });

  describe('Home link', () => {
    it('should direct the user to the Home page', async () => {
      browser.get(`${browser.baseUrl}/about`);

      const homeLink = element(by.linkText('Home'));
      await homeLink.click();

      expect(
        element(by.cssContainingText('p', 'Give it a whirl!'))
      ).toBeTruthy();
    });
  });
});
