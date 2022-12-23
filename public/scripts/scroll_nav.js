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
  const logo = document.querySelectorAll("nav div:nth-child(1) a img");
  const logotext = document.querySelectorAll("nav div:nth-child(1) span");
  const navdivs = document.querySelectorAll("nav div");
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
    for (let i = 0; i < text.length; i++) {
      const element = logo[i];
      element.classList.add("logo-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = logotext[i];
      element.classList.add("logo2-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = navdivs[i];
      element.classList.add("navd-active");
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
    for (let i = 0; i < text.length; i++) {
      const element = logo[i];
      element.classList.remove("logo-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = logotext[i];
      element.classList.remove("logo2-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = navdivs[i];
      element.classList.remove("navd-active");
    }
  }
};
