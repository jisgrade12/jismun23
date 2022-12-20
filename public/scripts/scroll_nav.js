window.onscroll = () => {
  scrollNavbar();
};

scrollNavbar = () => {
  var navBar = document.getElementById("navbar");
  const links = document.querySelectorAll("#navbar .nav-active");
  const text = document.querySelectorAll(".slide1 .slide-bg");
  const linkies = document.querySelectorAll("#navbar .links");
  const title = document.querySelectorAll(".slide1 h1");
  const title2 = document.querySelectorAll(".slide1 h2");
  if (document.documentElement.scrollTop > 50) {
    navBar.classList.add("fixed-header");

    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.add("scrolled-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = text[i];
      element.classList.add("bg-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = linkies[i];
      element.classList.add("linkies-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = title[i];
      element.classList.add("title-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = title2[i];
      element.classList.add("title-active");
    }
  } else {
    navBar.classList.remove("fixed-header");
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.remove("scrolled-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = text[i];
      element.classList.remove("bg-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = linkies[i];
      element.classList.remove("linkies-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = title[i];
      element.classList.remove("title-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = title2[i];
      element.classList.remove("title-active");
    }
  }
};
