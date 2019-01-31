require('webdriverio');

describe('my awesome website', () => {
    it('should do some chai assertions', () => {
        browser.url('https://www.nbcnews.com');

        var Links = browser.elements("a").value;

        Links.forEach(function(link){
            console.log(link);
        });

        
    });
});