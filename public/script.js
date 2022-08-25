const axios = require('axios').default;

let text2 = document.querySelector('.text2');
btn.addEventListner('click', makeReq);

async function makeReq(){
  CountQueuingStrategy.innerHtml = '';
  let sum = 0;
  let number = await axios.get('/count');
  sum += number.data;
  CountQueuingStrategy.innerHTML += sum;
}