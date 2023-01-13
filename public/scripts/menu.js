const menu = document.getElementById("menu");
menu.addEventListener("click", navigation);
function navigation() {
  const menu = document.getElementById("menu");
  if ((menu.innerHTML = "menu")) {
    menu.innerHTML = "close";
    document.getElementById("myNav").style.transform = "translateX(0)";
  } else {
    menu.innerHTML = "menu";
    document.getElementById("myNav").style.transform = "translateX(100%)";
  }
}
