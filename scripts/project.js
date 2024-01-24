let counter = 0;
let left1Btn = document.getElementById("prev");
let right1Btn = document.getElementById("next");
let layerArr = document.querySelectorAll(".project-card");
let page = document.querySelector(".page-indicator");
for (let i = 0; i <= 2; i++) {
  layerArr[i].style.opacity = [1, 0, 0][i];
}
right1Btn.addEventListener("click", () => {
  layerArr[counter].style.opacity = 0;
  counter += 1;
  if (counter > 2) {
    counter = 2;
  }
  page.textContent = `${counter + 1} / 3`;
  layerArr[counter].style.opacity = 1;
});
left1Btn.addEventListener("click", () => {
  layerArr[counter].style.opacity = 0;
  counter -= 1;
  if (counter < 0) {
    counter = 0;
  }
  page.textContent = `${counter + 1} / 3`;
  layerArr[counter].style.opacity = 1;
});
console.log(page);
