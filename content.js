const offensiveWords = ["violence", "offensiveWord1", "offensiveWord2"];
const regex = new RegExp(offensiveWords.join("|"), "gi");

document.body.innerHTML = document.body.innerHTML.replace(regex, "***");
