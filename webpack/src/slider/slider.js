const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const progressBar = document.querySelector('.progress-bar');
const sliderList = document.querySelector('.slider-list');

let currentPosition = 0;
const scrollAmount = 200;
let progressPercentage = 0;
const containerWidth = slider.offsetWidth;
const contentWidth = slider.scrollWidth;

prevButton.addEventListener('click', () => {
  if (progressPercentage != 0) {
    currentPosition += scrollAmount;
    sliderList.style.transform = `translateX(${currentPosition}px)`;
    updateProgressBar();
    if (progressPercentage === 0) {
      progressBar.style.width = `${7}%`;
      prevButton.classList.remove('left-switch-active');
    }
    nextButton.classList.add('right-switch-active');
  }
});

nextButton.classList.add('right-switch-active');
nextButton.addEventListener('click', () => {
  if (progressPercentage != 100) {
    currentPosition -= scrollAmount;
    sliderList.style.transform = `translateX(${currentPosition}px)`;
    updateProgressBar();
  }
  if (progressPercentage != 0) {
    prevButton.classList.add('left-switch-active');
  } else {
    prevButton.classList.remove('left-switch-active');
  }
});
/**
 * Вычисляет длинну прогресс-бара
 */
function updateProgressBar() {
  progressPercentage = Math.abs(
      (currentPosition / (contentWidth - containerWidth)) * 100);
  progressPercentage = Math.min(progressPercentage, 100);
  if (progressPercentage === 100) {
    nextButton.classList.remove('right-switch-active');
  }
  progressBar.style.width = `${progressPercentage}%`;
}
