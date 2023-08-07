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