const fetch = require('node-fetch').default;

const obiwan = 'https://swapi.co/api/people/10/';

async function parseLink(link) {
  const kek = await fetch(link);
  return kek.json();
}

async function getJsonViaPromise(url) {
  const obi = await parseLink(url);
  // const { homeworld, films, vehicles, starships, species } = obi;
  const arr = await Promise.all([
    obi.films.map(await parseLink),
    obi.vehicles.map(await parseLink),
    obi.starships.map(await parseLink),
    obi.species.map(await parseLink),
    parseLink(obi.homeworld),
  ]);
  Promise.all([
    arr[0].forEach((el, i) => {
      obi.films[i] = el;
    }),
    arr[1].forEach((el, i) => {
      obi.vehicles[i] = el;
    }),
    arr[2].forEach((el, i) => {
      obi.films[i] = el;
    }),
    arr[3].forEach((el, i) => {
      obi.films[i] = el;
    }),
  ]);
  console.log(obi);
}

getJsonViaPromise(obiwan);
// getJsonViaPromise(obiwan).then(arr => console.log(arr));
/* getJsonViaPromise(obiwan).then(a => {
  return a[0][0].then(b => console.log(b));
}); */

// console.log('noice');
