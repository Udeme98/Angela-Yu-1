let numberOfButtons = document.querySelectorAll("button").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // console.log("button " + i + " clicked");
  });
}
