const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const textContainer = document.querySelector(".text-container");
const header = document.querySelector("#text");
const header2 = document.querySelector("#text-2");
const header3 = document.querySelector("#text-3");

btnYes.addEventListener("click", (e) => {
  btnYes.classList.add("hide");
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  header.remove();
  imageTwo.classList.remove("hide");
  header2.classList.remove("hide");
  header3.classList.remove("hide");
});

btnNo.addEventListener("click", (e) => {
  btnYes.classList.add("hide");
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.add("hide");
  textContainer.classList.add("hide");
  imageThree.classList.remove("hide");
});
