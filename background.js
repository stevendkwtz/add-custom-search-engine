"use strict";

browser.browserAction.onClicked.addListener(function () {
  browser.tabs.create({
    url: browser.runtime.getURL("search.html"),
    // url: browser.extension.getURL("search.html")
  });
});
