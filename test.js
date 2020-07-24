const puppeteer = require("puppeteer-core")
const config = require("./Config.json")
const solveCaptcha = require("./index.js")(config.TWO_CAPTCHA_KEY)
const browserOptions = {
  headless: false,
  browserWSEndpoint: `ws://127.0.0.1:9222/devtools/browser/bcdf109e-216c-459c-ac39-294a35a7122d`,
  executablePath: `C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe`,
  userDataDir: `C:\\Users\\Jamie\\AppData\\Local\\Google\\Chrome\\User Data\\Default`,
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
