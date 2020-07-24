# Recaptchevade
node module to solve Google Recaptchas with 2captcha 

## Sample usage
```js
const puppeteer = require("puppeteer-core")
const config = require("./Config.json")
const solveCaptcha = require("./index.js")(config.TWO_CAPTCHA_KEY)
const browserOptions = {
  headless: false
}

const main = async () => {
  const browser = await puppeteer.connect(browserOptions)
  const page = await browser.newPage()
  await page.goto("https://www.google.com/recaptcha/api2/demo")
  await solveCaptcha(page, null, async (response) => {
    console.log(response)
  })
}
main()
```
