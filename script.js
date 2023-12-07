const animationPath = 'lottie.json';
  fetch(animationPath)
    .then(response => response.json())
    .then(data => {
      const animationContainer = document.getElementById('lottie-container');
      lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data,
      });
  })



  document.addEventListener("DOMContentLoaded", function () {
    const animatedContainers = document.querySelectorAll(".animated-container");

    function checkScroll() {
      animatedContainers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const threshold = 0.8;

        if (rect.top <= windowHeight * threshold) {
          container.classList.add("active");
        }
      });
    }

    checkScroll();
    window.addEventListener("scroll", checkScroll);
  });