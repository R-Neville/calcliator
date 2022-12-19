import { browser, ElementFinder, ProtractorExpectedConditions } from "protractor";

export default class Base {
  public EC: ProtractorExpectedConditions = browser.ExpectedConditions;
  public timeout: number = 30000;

  /**
   * 
   * @param path - the path to load (appended to base URL).
   */
  async loadPage(path?: string) {
    await browser.get(`${browser.baseUrl}/${path}`);
  }
}