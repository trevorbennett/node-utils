const body = { fruit: "tomato" };
const response = await fetch('https://giveusdata.com/add-fruit', {
  method: 'POST',
  body,
  headers: {
    'Content-type': 'application/json',
    'Authorization': 'for-testing-only',
    'Authentication': 'for-testing-only'
  },
});
if(response.ok) {
  console.log("response JSON: ", response.JSON());
} else {
  console.error("response Error Body: ", response);
  throw new Error(response);
}