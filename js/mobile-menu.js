const refs = {
  openModalBtn: document.querySelector("[data-menu-open]"),
  mobMenu: document.querySelector("[data-menu]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.mobMenu.addEventListener("click", toggleModal);

function toggleModal() {
  refs.mobMenu.classList.toggle("is-open");
}
