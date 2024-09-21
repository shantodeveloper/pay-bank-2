// document
//   .getElementById('add-amount-btn')
//   .addEventListener('click', function (event) {
//     event.preventDefault();
//     const inputnumber = getInputFealdValueByid('Anount-input');
//     const inputPin = document.getElementById('input-pin').value;
//     if (inputPin === '1234') {
//       const balance = getInputInnerText('balance');
//       const addAmount = inputnumber + balance;
//       document.getElementById('balance').innerText = addAmount;

//       const p = document.createElement('p');
//       p.innerText = `added tk ${inputnumber} Tk New Balance ${addAmount}`;

//       document.getElementById('transection-section').appendChild(p);
//     } else {
//       alert('wrong number or phone');
//     }
//   });

// document
//   .getElementById('cash-out-btn')
//   .addEventListener('click', function (event) {
//     event.preventDefault();

//     const inputnumber = getInputFealdValueByid('CashOut-input');
//     const cashoutpin = document.getElementById('cash-pin').value;
//     if (cashoutpin === '1234') {
//       const balance = getInputInnerText('balance');
//       const addAmount = balance - inputnumber;
//       document.getElementById('balance').innerText = addAmount;
//     } else {
//       alert('wrong number or phone');
//     }
//   });

// document.getElementById('cashout-btn').addEventListener('click', function () {
//   addamountfunc('cashout-from');
//   cashoutfunc('add-from');
// });

// document.getElementById('add-amount').addEventListener('click', function () {
//   cashoutfunc('cashout-from');
//   addamountfunc('add-from');
// });

// document
//   .getElementById('transection-btn')
//   .addEventListener('click', function () {
//     cashoutfunc('add-from');
//     cashoutfunc('cashout-from');
//     addamountfunc('transection-section');
//   });

// // document.getElementById('add-amount-btn')
// // .addEventListener('click', function (event) {
// //     event.preventDefault();

// //     const inputAmount = document.getElementById('Anount-input').value;
// //     const inputAmountNumber = parseFloat(inputAmount);

// //     const inputpin = document.getElementById('input-pin').value;

// //     if (inputpin === '1234') {
// //       const balance = document.getElementById('balance').innerText;
// //       const balanceNumber = parseFloat(balance);

// //       const addbalance = inputAmountNumber + balanceNumber;
// //       document.getElementById('balance').innerText = addbalance;
// //     }
// //   });
