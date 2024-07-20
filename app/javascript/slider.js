 document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const imageTrack = document.querySelector('.image-track');
  const slideImages = document.querySelectorAll('.slide-image');

  let index = 0;
  const totalImages = slideImages.length;

  function updateSlider() {
    const offset = -index * 100; // Adjust width based on the number of images
    imageTrack.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalImages - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    index = (index < totalImages - 1) ? index + 1 : 0;
    updateSlider();
  });

  // Optional: Auto slide
  setInterval(() => {
    nextButton.click();
  }, 5000); // Change image every 5 seconds
});


