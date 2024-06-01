const img = document.getElementById("product-image");
const buttons = document.querySelectorAll("#image-picker li");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const buttonClick = e.target;
    buttonClick.querySelector(".color").classList.add("selected");

    const id = buttonClick.getAttribute("id");

    img.classList.add("changing");
    img.setAttribute("src", `img/iphone_${id}.png`);

    setTimeout(() => {
      img.classList.toggle("changing");
    }, 200);
  });
});
