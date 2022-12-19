import HomePage from "../page-objects/home-page";

export default function getHomePage() {
  const homePage = new HomePage();
  homePage.load();
  return homePage;
}