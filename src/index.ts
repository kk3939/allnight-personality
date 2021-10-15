import puppeteer from "puppeteer";
import type { Browser, Page } from "puppeteer";

export class AllnightPersonality {
  constructor() { }
  async fetchPersonality() {
    return new Promise(async (resolve, reject) => {
      const url: string = "https://www.allnightnippon.com/personality.html";
      const browser: Browser = await puppeteer.launch();
      const page: Page = await browser.newPage();
      try {
        await page.goto(url)
        const scrapingData = await page.evaluate(() => {
          const array: string[] = [];
          const nodeList: NodeListOf<HTMLElement> = document.querySelectorAll("dd");
          nodeList.forEach((elem: HTMLElement, index) => {
            if (!elem.textContent) {
              array.push("can not get personality name.");
            } else {
              array.push(elem.textContent);
            }
          });
          resolve(array);
        });
        return scrapingData;

      } catch (e) {
      }
    })
  };
}

const main = new AllnightPersonality;
console.log(main.fetchPersonality());


// const fetchPersonality = async () => {
//   const url: string = "https://www.allnightnippon.com/personality.html";
//   const browser: Browser = await puppeteer.launch();
//   const page: Page = await browser.newPage();
//   try {
//     await page.goto(url);
//     const scrapingData = await page.evaluate(() => {
//       const array: string[] = [];
//       const nodeList: NodeListOf<HTMLElement> = document.querySelectorAll("dd");
//       nodeList.forEach((elem: HTMLElement, index) => {
//         if (!elem.textContent) {
//           array.push("can not get personality name.");
//         } else {
//           array.push(elem.textContent);
//         }
//       });
//       return array;
//     });
//     return scrapingData;
//   } catch (e) {
//     return e;
//   }
// };

// fetchPersonality();