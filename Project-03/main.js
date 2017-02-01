const inputs = document.querySelectorAll('.controls input');
console.log('loooook at the circle', inputs[0].dataset.fun);

function handleUpdate() {
  const sizeSuffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sizeSuffix);
  sessionStorage[this.name] = this.value;
}

// because the collection of inputs isn't actually an array, it's a nodelist.
// .map() isn't available on the nodelist prototype, but .forEach() is.


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
//
const button = document.querySelector('#testButton');
button.addEventListener('click', function() { console.log(sessionStorage)});


// inputs.forEach(input => {
//   console.log(input.name, input.value);
//   sessionStorage[input.name] = input.value;
// });

if (sessionStorage) {
  const borderColor = sessionStorage.getItem('border-color');
  const borderSize = sessionStorage.getItem('border-size');
  const circleSize = sessionStorage.getItem('circle-size');
  const mainColor = sessionStorage.getItem('main-color');
  console.log(borderColor, borderSize, circleSize, mainColor);
}
