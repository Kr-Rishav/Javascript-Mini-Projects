// console.log('Hello');
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body);

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'gray') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'dark') {
      console.log('hello');
      body.style.backgroundColor = '#212121';
      body.style.color = 'white';
    }
  });
});
