import puppeteer from "puppeteer";
import type { Browser, Page } from "puppeteer";

export class AllnightPersonality {
  name: string[];
  constructor() {
    this.name = [];
  }

  // inisialize props to avoid fetching data in constractor.
  public static async init(): Promise<AllnightPersonality> {
    const personality = new AllnightPersonality();
    personality.name = await this.fetchPersonality();
    return personality;
  }


  // fetch personality names which is in "dd" of HTML emlement with puppeteer.
  private static async fetchPersonality() {
    const url: string = "https://www.allnightnippon.com/personality.html";
    const browser: Browser = await puppeteer.launch();
    const page: Page = await browser.newPage();
    try {
      await page.goto(url);
      const personalityArray: string[] = await page.evaluate(() => {
        const array: string[] = [];
        const personalityNodeList: NodeListOf<HTMLElement> = document.querySelectorAll("dd");
        personalityNodeList.forEach((elem: HTMLElement) => {
          if (!elem.textContent) {
            array.push("cannot get personality name.");
          } else {
            array.push(elem.textContent);
          }
        });
        return array;
      });
      await page.close();
      await browser.close();
      return personalityArray;
    } catch (e) {
      console.log(e);
      return ["エラー"];
    }
  };
}