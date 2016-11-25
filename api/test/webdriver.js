const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until

class OcpPage {
  constructor(driver, url){
    this.driver = driver
    this.url = url || 'http://localhost:3000'
    this.exampleSelector = By.css('h1')
  }
  setup(){
    this.driver.get(this.url)
    return this.driver.wait(until.elementLocated(this.exampleSelector), 3000)
  }
  getExampleText(){
    return this.driver.findElement(this.exampleSelector).getText()
  }
}

module.exports = OcpPage
