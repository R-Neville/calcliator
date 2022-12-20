import { element, by } from 'protractor';
import Base from './base';

export default class HomePage extends Base {
  constructor() {
    super();
  }

  /**
   * Get a random digit between 0 and 9 inclusive.
   */
  get randomDigit() {
    return Math.floor(Math.random() * 10);
  }

  get randomDigitNotZero() {
    return Math.ceil(Math.random() * 9);
  }

  /**
   * Loads the home page.
   */
  public async load() {
    await this.loadPage('home');
  }

  /**
   * 
   * @param text - the text of the calculator control to get.
   * @returns ElementFinder
   */
  public getCalcControlByText(text: string) {
    return element(by.cssContainingText('.controls__row button', text));
  }

  /**
   * 
   * @param text - the text of the calculator control to click
   */
  public async clickControlByText(text: string) {
    await this.getCalcControlByText(text).click()
  }

  /**
   * Click the evaluate button (=).
   */
  public async evaluate() {
    await this.getCalcControlByText('=').click();
  }

  /**
   * Click the undo ('DEL') button.
   */
  public async undo() {
    await this.getCalcControlByText('DEL').click();
  }

  /**
   * Click the clear ('CLR') button.
   */
  public async clear() {
    await this.getCalcControlByText('CLR').click();
  }

  /**
   * Get the text displayed by the .screen__result div.
   * @returns Promise<string>
   */
  public async getResultText() {
    return await element(by.css('.screen__result')).getText();
  }


/**
 * Get the text displayed by the .screen__calculation div.
 * @returns Promise<string>
 */
  public async getCalculationText() {
    return await element(by.css('.screen__calculation')).getText();
  }
}
