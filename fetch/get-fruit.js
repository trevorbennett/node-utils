const response = await fetch('https://giveusdata.com/fruit');
const data = await response.json();
console.log(data);
