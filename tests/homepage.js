module.exports = {
  'Home Page' : (browser) => {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#title', 'Title')
      .end();
  }
};