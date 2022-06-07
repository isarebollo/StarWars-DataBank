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
const getPlanets = () => {
  return Get(`https://www.swapi.tech/api/planets`);
};
const getVehicles = () => {
  return Get(`https://www.swapi.tech/api/vehicles`);
};

// const CorrectData = (Url) => { ESTA URL ES SACADA CON UN BUCLE EN EL DATA DE LOS USEEFECT PARA ENTRAR EN LA URL DEL OBJETO.
//   return fetch(Url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export default { Get, getCharacters, getPlanets, getVehicles, /*CorrectData*/ };
