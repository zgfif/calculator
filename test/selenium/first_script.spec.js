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

// testing clicking 12 + 9 = + 6 =  on screen must be 27
(async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get(URL);

  assert.equal(await driver.findElement(By.id('input_field')).getText(), '0');

  const one = await driver.findElement(By.xpath("//td[@data-value='1']"));

  await one.click();

  assert.equal(await driver.findElement(By.id('input_field')).getText(), '1');

  const two = await driver.findElement(By.xpath("//td[@data-value='2']"));

  await two.click();

  assert.equal(await driver.findElement(By.id('input_field')).getText(), '12');

  const plus = await driver.findElement(By.xpath("//td[@data-value='+']"));

  await plus.click();

  assert.equal(await driver.findElement(By.id('input_field')).getText(), '12 +');

  const nine = await driver.findElement(By.xpath("//td[@data-value='9']"));

  await nine.click();

  assert.equal(await driver.findElement(By.id('input_field')).getText(), '12 + 9');

  const equal = await driver.findElement(By.xpath("//td[@data-value='=']"));

  await equal.click();

  const result = await driver.findElement(By.id('input_field')).getText();

  assert.equal(result, '21');

  await plus.click();

  assert.equal(await driver.findElement(By.id('input_field')).getText(), '21 +');

  const six = await driver.findElement(By.xpath("//td[@data-value='6']"));

  await six.click();

  assert.equal(await driver.findElement(By.id('input_field')).getText(), '21 + 6');

  await equal.click();

  assert.equal(await driver.findElement(By.id('input_field')).getText(), '27');

  await driver.quit();
})();

// 0 / 9 result must be 0
(async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get(URL);

  await driver.findElement(By.xpath("//td[@data-value='0']")).click();

  await driver.findElement(By.xpath("//td[@data-value='/']")).click();

  await driver.findElement(By.xpath("//td[@data-value='9']")).click();

  await driver.findElement(By.xpath("//td[@data-value='=']")).click();

  const result = await driver.findElement(By.id('input_field')).getText();

  assert.equal(result, '0');

  await driver.quit();
})();

// 23 + 2 = +- result must be -25
(async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get(URL);

  await driver.findElement(By.xpath("//td[@data-value='2']")).click();

  await driver.findElement(By.xpath("//td[@data-value='3']")).click();

  await driver.findElement(By.xpath("//td[@data-value='+']")).click();

  await driver.findElement(By.xpath("//td[@data-value='2']")).click();

  await driver.findElement(By.xpath("//td[@data-value='=']")).click();

  await driver.findElement(By.xpath("//td[@data-value='+-']")).click();

  const result = await driver.findElement(By.id('input_field')).getText();

  assert.equal(result, '- 25');

  await driver.quit();
})();
