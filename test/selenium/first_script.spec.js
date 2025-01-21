import { By, Builder, Browser } from 'selenium-webdriver';
import assert from 'assert';

const URL = 'http://localhost:8081/';

// testing the title of page with calculator
(async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get(URL);

  let title = await driver.getTitle();

  assert.equal(title, 'calculator');

  await driver.quit();
})();

// testing sum 5 + 3 = 8
(async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get(URL);

  const five = await driver.findElement(By.xpath("//td[@data-value='5']"));

  await five.click();

  const plus = await driver.findElement(By.xpath("//td[@data-value='+']"));

  await plus.click();

  const three = await driver.findElement(By.xpath("//td[@data-value='3']"));

  await three.click();

  const equal = await driver.findElement(By.xpath("//td[@data-value='=']"));

  await equal.click();

  const result = await driver.findElement(By.id('input_field')).getText();

  assert.equal(result, '8');

  await driver.quit();
})();
