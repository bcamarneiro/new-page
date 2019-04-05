// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

const collectionID = 789734;

fetch(`https://api.unsplash.com/photos/random?collections=${collectionID}&orientation=landscape`, {
//fetch('https://api.unsplash.com/photos/r?page=1&query=minimalism&per_page=1&orientation=landscape', {
  method: 'GET',
  headers: new Headers({
    'Authorization': `Client-ID ${'02fbccc32cc265cb5505de588a71efc284b0fb99721f9a05d1456b035c3519c1'}`
  })
})
.then(data => data.json())
.then((data) => {
  const url = data.urls.full;
  // Create our stylesheet
  var style = document.createElement('style');
  style.innerHTML =
    'body {' +
      `background: url(${url}&w=${window.screen.width}&fit=max` +
    '}';

  // Get the first script tag
  var ref = document.querySelector('link');

  // Insert our new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);
})
