
require("webdriverio");

describe("sample",function(){
    this.timeout(9999999);
    it("tc1",function(){
        browser.url("https://www.nbcnews.com/mach/video/energy-kite-promises-a-new-way-to-harness-wind-power-1433286723625");
        //browser.windowHandleMaximize();
        console.log(browser.getUrl().androidClient);

        browser.click("//button[@class='videoPlayer__play videoPlayer__play--manual play___2SVnM']");
        console.log("clicked")

        browser.pause(3000)

        var waitCount = 0
        var adPlayed = false;
        while(waitCount <= 20){
            if(browser.isExisting("//div[contains(@class,'adControls')]")){
                console.log("ad existing")
                adPlayed = true;
                break;
            }
            else{
                browser.pause(250);
            }
            waitCount++;
        }

        if(adPlayed)
        {
            browser.waitUntil(function(){
                console.log('Is ad still playing: ', browser.isExisting("//div[contains(@class,'adControls')]").androidClient)
                return(!browser.isExisting("//div[contains(@class,'adControls')]").androidClient)
            },3*60*1000)
            console.log('Ad played')
        }
        else{
            console.log('Ad not played')
        }

        browser.waitUntil(function(){
            console.log('progress',browser.isExisting("//progress").androidClient)
            return(browser.isExisting("//progress").androidClient)
        },3*60*1000)

        browser.waitUntil(function(){
            console.log('progress',browser.isExisting("//progress").androidClient)
            return(browser.isExisting("//progress").androidClient)
        },3*60*1000)

        browser.waitUntil(function(){
            console.log('max value',browser.getAttribute("//progress","max").androidClient)
            return(browser.getAttribute("//progress","max").androidClient > 1)
        },3*60*1000)

        var counter = 0;
        browser.waitUntil(function(){
            console.log(browser.getAttribute("//progress","value").androidClient, browser.getAttribute("//progress","max").androidClient)
            return(browser.getAttribute("//progress","value").androidClient == browser.getAttribute("//progress","max").androidClient)
        },3*60*1000)
    })
})
