require('webdriverio');
console.log("the test started")

describe('my awesome website', () => {
    it('should do some chai assertions', () => {
        browser.url('https://www.google.com');
    });
});