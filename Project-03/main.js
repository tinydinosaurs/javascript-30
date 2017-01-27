const inputs = document.querySelectorAll('.controls input');
console.log('loooook at the circle', inputs[0].dataset.fun);

function handleUpdate() {
  const sizeSuffix = this.dataset.sizing || '';
  sessionStorage.setItem('values', this.value);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sizeSuffix);

}

// because the collection of inputs isn't actually an array, it's a nodelist.
// .map() isn't available on the nodelist prototype, but .forEach() is.

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// const button = document.querySelector('#testButton');
// button.addEventListener('click', function() { console.log(inputs[0].value)});
