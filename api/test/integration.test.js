const path = require('path')
const Page = require('./webdriver')
const fs = require('fs')
const webdriver = require('selenium-webdriver')
const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.should()
const expect = chai.expect
const moment = require('moment')

function screenShot(driver, name){
  driver.takeScreenshot().then(function(data){
    const base64Data = data.replace(/^data:image\/png;base64,/,"")
    fs.writeFile((name || 'out')+'-'+moment().format()+'.png', base64Data, 'base64', function(err) {
      if (err) console.error(err)
    })
  })
}

describe('Page', function(){
  let driver, page, port

  before(function(){
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build()

    return driver.getWindowHandle()
  })

  after(function(){
    return driver.quit()
  })

  beforeEach(function(){
    const url = 'https://google.com'
    page = new Page(driver, url)
    page.setup()
  })

  afterEach(function(){
    screenShot(driver)
  })

  it('should do something for example', function(){
    //enter test code here
    //const text = page.getExampleText()
  })
})
