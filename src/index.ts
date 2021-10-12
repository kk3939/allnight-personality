import puppeteer from "puppeteer";
import type { Browser, Page } from "puppeteer";
// import inquirer from "inquirer";

const url: string = "https://www.allnightnippon.com/personality.html";

const main = async (): Promise<void> => {
  const browser: Browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // const elem = await page.$$("dd");
  // console.log(elem);

  const scrapingData = await page.evaluate(() => {
    const array: any = [];
    const nodeList = document.querySelectorAll("dd");
    nodeList.forEach((elem) => {
      array.push(elem.textContent)
    });
    return array;
  });
  console.log(scrapingData);

};

main();