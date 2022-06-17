const Get = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })

    .catch((error) => {
      console.log(error);
    });
};
const getCharacters = () => {
  return Get(`https://www.swapi.tech/api/people`);
};
const getCharacterUid = (uid) => {
  return Get(`https://www.swapi.tech/api/people/${uid}`);
};
const getPlanets = () => {
  return Get(`https://www.swapi.tech/api/planets`);
};
const getPlanetUid = (uid) => {
  return Get(`https://www.swapi.tech/api/planets/${uid}`);
};
const getVehicles = () => {
  return Get(`https://www.swapi.tech/api/vehicles`);
};
const getVehiclesUid = (uid) => {
  return Get(`https://www.swapi.tech/api/vehicles/${uid}`);
};

export default {
  Get,
  getCharacters,
  getCharacterUid,
  getPlanets,
  getPlanetUid,
  getVehicles,
  getVehiclesUid,
};
