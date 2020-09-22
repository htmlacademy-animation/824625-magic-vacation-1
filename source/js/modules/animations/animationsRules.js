export default () => {
  window.onload = () => {
    const lastRulesItem = document.querySelector(`.rules__item:last-child`);

    lastRulesItem.addEventListener(`animationend`, () => {
      const rulesBtn = document.querySelector(`.rules__link`);
      rulesBtn.classList.add(`show`);
    });
  };
};
