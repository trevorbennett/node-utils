async function getFruit() {
    const response = await fetch("https://giveusdata.com/fruit");
    return await response.json();
  }
  
  async function getFruitTimeout() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000, "Timed out after 1000 milliseconds.");
    });
  }
  
  Promise.race([getFruit(), getFruitTimeout()]).then((res) => {
    console.log(res);
  });