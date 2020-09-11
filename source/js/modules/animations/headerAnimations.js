export default () => {
  window.onload = () => {
    showHeaderLogo();
    showHeaderMenu();
    showSocialBlock();
  };
};

function showHeaderLogo() {
  let headerLogo = document.querySelector(`.js-header-logo`);

  if (headerLogo) {
    headerLogo.classList.add(`page-header__logo--show`);
  }
}

function showHeaderMenu() {
  let headerMenu = document.querySelector(`.js-menu`);

  if (headerMenu) {
    headerMenu.classList.add(`page-header__menu--show`);
  }
}

function showSocialBlock() {
  let socialBlock = document.querySelector(`.js-social-block`);

  if (socialBlock) {
    socialBlock.classList.add(`social-block--show`);
  }
}
