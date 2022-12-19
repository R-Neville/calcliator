import { browser } from "protractor";

export default async function getAlertTextAndDismiss() {
  const alert = await browser.switchTo().alert();
  const text = await alert.getText();
  alert.dismiss();
  return text;
}