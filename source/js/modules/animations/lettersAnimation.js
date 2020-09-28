export class LettersAnimation {
  constructor(elementSelector, timer, classForActivate, property, order) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;
    this.order = order;

    this.prePareText();
  }

  createElement(letter, index) {
    const span = document.createElement(`span`);
    span.textContent = letter;

    if (this.order && this.order.length) {
      const delta = this.order[index];
      let offset = this._timeOffset + 40 * delta;
      span.style.transition = `${this._property} ${this._timer}ms ease ${offset}ms`;
    } else {
      span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
      this._timeOffset += 20;
    }

    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter) => latter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter, index) => {
        fragment.appendChild(this.createElement(latter, index));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`letters-animation__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
    this._element.classList.add(`letters-animation`);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}

const order = [0, 2, 1, 3, 5, 4];
export const animationRulesTitle = new LettersAnimation(`.rules__title`, 500, `active`, `transform`, order);

setTimeout(() => {
  animationRulesTitle.runAnimation();
}, 500);


