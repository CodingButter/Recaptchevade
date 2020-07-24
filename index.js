const Client = require("@infosimples/node_two_captcha")
var _page
var defaultClientOptions = {
  timeout: 60000,
  polling: 5000,
  throwErrors: false,
}
var twoCaptchaKey
var clientOptions
const getSiteKey = async (page) => {
  await page.waitForSelector(".g-recaptcha")
  return await page.evaluate(() => {
    return document.querySelector(".g-recaptcha").getAttribute("data-sitekey")
  })
}

const solveCaptcha = async function (page, options, submit) {
  //Set client options and default client options
  clientOptions = options || clientOptions
  //Exit function if recaptcha is not found
  if (!(await page.$(".g-recaptcha"))) return

  //Initiciate a new 2Captcha client
  const client = new Client(twoCaptchaKey, clientOptions)

  const siteKey = await getSiteKey(page)
  let response = await client.decodeRecaptchaV2({
    googlekey: siteKey,
    pageurl: page.url(),
  })

  if (await response) {
    submit(response.text)
  }
}

module.exports = (two_captcha_key, client_options) => {
  defaultClientOptions = defaultClientOptions || client_options
  twoCaptchaKey = two_captcha_key
  return solveCaptcha
}
