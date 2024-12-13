chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      const blockedSites = ["pornhub.com", "xxx.videos.com"];
      if (blockedSites.some(site => details.url.includes(site))) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  