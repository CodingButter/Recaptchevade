# Recaptchevade

node module to solve Google Recaptchas with 2captcha

## Sample usage

```js
const puppeteer = require("puppeteer-core")
const config = require("./Config.json")
const solveCaptcha = require("recaptchevade")(config.TWO_CAPTCHA_KEY)
const browserOptions = {
  headless: false,
}(async () => {
  const browser = await puppeteer.launch(browserOptions)
  const page = await browser.newPage()
  await page.goto("https://www.google.com/recaptcha/api2/demo")
  await solveCaptcha(page, null, async (response) => {
    document.querySelectore("#recaptcha-demo-submit").click()
  })
})()
```
