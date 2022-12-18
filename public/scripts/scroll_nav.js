window.onscroll = () => {
  scrollNavbar();
};

scrollNavbar = () => {
  var navBar = document.getElementById("navbar");
  const links = document.querySelectorAll("#navbar .nav-active");
  const text = document.querySelectorAll("#navbar .topnav-text");

  if (document.documentElement.scrollTop > 50) {
    navBar.classList.add("fixed-header");

    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.add("scrolled-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = text[i];
      element.classList.add("topnav-text-active");
    }
  } else {
    navBar.classList.remove("fixed-header");
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.remove("scrolled-active");
    }
    for (let i = 0; i < text.length; i++) {
      const element = text[i];
      element.classList.remove("topnav-text-active");
    }
  }
};
