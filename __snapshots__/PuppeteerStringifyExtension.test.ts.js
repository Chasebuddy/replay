exports[
  'PuppeteerStringifyExtension should print the correct script for a click step 1'
] = `
{
  const targetPage = page;
  await puppeteer.Locator.race([
    targetPage.locator('::-p-aria(Test)')
  ])
    .setTimeout(timeout)
    .click(10
{
      offset: {
        x: 1,
        y: 1,
      },
    });
}

`;

exports[
  'PuppeteerStringifyExtension should print the correct script for asserted events 1'
] = `
{
  const targetPage = page;
  const promises = [];
  const startWaitingForEvents = () => {
    promises.push(targetPage.waitForNavigation());
  }
  await puppeteer.Locator.race([
    targetPage.locator('::-p-aria(Test)')
  ])
    .setTimeout(timeout)
    .on('action', () => startWaitingForEvents())
    .click({
      offset: {
        x: 1,
        y: 1,
      },
    });
  await Promise.all(promises);
}

`;

exports[
  'PuppeteerStringifyExtension should print the correct script with a chain selector 1'
] = `
{
  const targetPage = page;
  await puppeteer.Locator.race([
    targetPage.locator('::-p-aria(Test) >>>> ::-p-aria(Test2)')
  ])
    .setTimeout(timeout)
    .click({
      offset: {
        x: 1,
        y: 1,
      },
    });
}

`;

exports[
  'PuppeteerStringifyExtension should print the correct script for a change step 1'
] = `
{
  const targetPage = page;
  await puppeteer.Locator.race([
    targetPage.locator('::-p-aria(Test)')
  ])
    .setTimeout(timeout)
    .fill('Hello World');
}

`;

exports[
  'PuppeteerStringifyExtension should print the correct script for a change step for non-text inputs 1'
] = `
{
  const targetPage = page;
  await puppeteer.Locator.race([
    targetPage.locator('::-p-aria(Test)')
  ])
    .setTimeout(timeout)
    .fill('#333333');
}

`;
