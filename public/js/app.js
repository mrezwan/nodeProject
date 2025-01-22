// fetch('http://localhost:3000/weather?address=Kentucky').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const webForm = document.querySelector('form');

const webSearch = document.querySelector('input');

const messageOne = document.querySelector('#message1');
const messageTwo = document.querySelector('#message2');

webForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = webSearch.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
