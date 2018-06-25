window.addEventListener('load', () => {
  console.log('ready.');

  // mark the active nav link
  let currentURL = location.href;
  document.querySelector('nav').querySelectorAll('a').forEach( (element) => {
    let linkURL = element.href;
    if (currentURL === linkURL) {
      element.classList.add('active');
    }
  })


}, false);
