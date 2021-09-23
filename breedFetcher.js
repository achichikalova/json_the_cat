const request = require('request');

const fetchBreedDescription = (breedSearch, callback) => {
  const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`;

  request(domain, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      error = `${breedSearch} has not found. Please, try another breed.`;
      callback(error, null);
    } else {
      callback(null, data[0].description);
    }
  });
  
};

module.exports = { fetchBreedDescription };