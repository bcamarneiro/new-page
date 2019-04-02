// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

fetch(`https://source.unsplash.com/random/${window.screen.width}x${window.screen.height}`)
.then(({url}) => {
  // Create our stylesheet
  var style = document.createElement('style');
  style.innerHTML =
    'body {' +
      `background: url(${url});` +
    '}';

  // Get the first script tag
  var ref = document.querySelector('script');

  // Insert our new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);
})
