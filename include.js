// include.js

function loadHTML(selector, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Could not load " + file);
      return response.text();
    })
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch((err) => {
      console.error(err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#navbar", "navbar.html");
  loadHTML("#footer", "footer.html");
});
