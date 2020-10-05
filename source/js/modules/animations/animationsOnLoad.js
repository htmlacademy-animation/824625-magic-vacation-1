import {LettersAnimation} from './lettersAnimation';

export default () => {
  window.onload = () => {
    document.body.classList.add(`loaded`);

    const order = [0, 2, 1, 3, 5, 4];
    const animationIntroDates = new LettersAnimation(`.intro__date`, 500, `active`, `transform`, order);
    setTimeout(() => {
      animationIntroDates.runAnimation();
    }, 500);
  };
};
