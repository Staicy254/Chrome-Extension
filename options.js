document.getElementById("addSite").addEventListener("click", () => {
    const site = document.getElementById("blockSite").value;
    chrome.storage.sync.get({ blockedSites: [] }, function (data) {
      const sites = data.blockedSites;
      sites.push(site);
      chrome.storage.sync.set({ blockedSites: sites }, function () {
        displaySites();
      });
    });
  });
  
  function displaySites() {
    chrome.storage.sync.get({ blockedSites: [] }, function (data) {
      const list = document.getElementById("blockedSites");
      list.innerHTML = "";
      data.blockedSites.forEach(site => {
        const li = document.createElement("li");
        li.textContent = site;
        list.appendChild(li);
      });
    });
  }
  
  displaySites();
  