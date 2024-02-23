var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

function makeActive(currentHash) {
  makeInactive();
  var tabToActivate = document.querySelector(`a[href="#${currentHash}"]`);
  tabToActivate.classList.add("active");
}

function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}


function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  for (var i = 0; i < data.length; i++) {
    if (data[i].section === currentHash) {
      contentPara.innerHTML = `
        <h2>${data[i].section}</h2>
        <p>${data[i].story}</p>
      `;
      makeActive(currentHash);
    }
  }
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector('[href="#cuisines"]').classList.add("active");
  }
  setContentAccordingToHash();
}

window.addEventListener("hashchange", setContentAccordingToHash); // NEW

document.addEventListener("DOMContentLoaded", initializePage);
