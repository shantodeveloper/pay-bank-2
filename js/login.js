document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const inputNumber = document.getElementById('login-input').value;
    const inputpin = document.getElementById('input-pin').value;

    if (inputNumber === '5' && inputpin === '1234') {
      window.location.href = '/home.html';
    } else {
      alert('wrong number or pin');
    }
  });
