import { Builder, Browser, By } from 'selenium-webdriver';
import assert from 'assert';

const URL = 'http://localhost:8080/';

(async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get(URL);

  const btn = await driver.findElement(By.id('themeButton'));

  assert.strictEqual(await driver.executeScript('return window.localStorage.getItem("theme")'), 'gruvebox');

  await btn.click();

  assert.strictEqual(await driver.executeScript('return window.localStorage.getItem("theme")'), 'lime');

  await btn.click();

  assert.strictEqual(await driver.executeScript('return window.localStorage.getItem("theme")'), 'gruvebox');

  await driver.quit();
})();
