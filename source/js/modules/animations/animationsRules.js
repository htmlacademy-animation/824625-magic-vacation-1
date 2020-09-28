export default () => {
  window.onload = () => {
    const rulesScreen = document.querySelector('.screen--rules');
    const lastRulesItem = document.querySelector(`.rules__item:last-child`);
    const rulesBtn = document.querySelector(`.rules__link`);

    lastRulesItem.addEventListener(`animationend`, () => {
      rulesBtn.classList.add(`show`);
    });

    // если rulesScreen изменился и содержит класс `screen--hidden`, убирать с rulesBtn класс `show`
    const mutationObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.target.classList.contains(`screen--hidden`)) {
          rulesBtn.classList.remove(`show`);
        }
      });
    });
    mutationObserver.observe(rulesScreen, {
      attributes: true,
    });
  };
};
