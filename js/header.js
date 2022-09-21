window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector("[data-header]");
  const headerOffsetTrigger = header.offsetHeight;
  const pageOffset = window.pageYOffset;
  const logo = document.querySelector("#logo");

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add("no-transparency");
    logo.classList.remove("logo__link--black");
  } else {
    header.classList.remove("no-transparency");
    logo.classList.add("logo__link--black");
  }
}
