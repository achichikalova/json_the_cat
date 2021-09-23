const request = require('request');

const breedSearch = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/', (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  const data = JSON.parse(body);
  for (const breeds of data) {
    if (breeds.name.includes(breedSearch)) {
      return console.log(breeds.description);
    }
  }
  return console.log(`${breedSearch} has not found. Please, try another breed.`);
});