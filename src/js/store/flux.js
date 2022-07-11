const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //personajes
      characters: [],
      characterProperties: {},
      //planetas
      planets: [],
      planetsProperties: {},
      //vehiculos
      vehicles: [],
      vehicleProperties: {},
      //favoritos
      favorites: [],
    },
    actions: {
      //personajes........................................................
      setCharacters: (characters) => {
        setStore({ characters: characters });
      },
      getCharacter: (uid) => {
        for (let i = 0; i < characters.length; i++) {
          if (characters[i].uid === uid) {
            return characters[i];
          }
        }
      },
      setCharacterProperties: (characterProperties) => {
        setStore({ characterProperties });
      },
      //planetas..........................................................................
      setPlanets: (planets) => {
        setStore({ planets: planets });
      },
      getPlanet: (uid) => {
        for (let i = 0; i < planets.length; i++) {
          if (planets[i].uid === uid) {
            return planets[i];
          }
        }
      },
      setPlanetProperties: (planetsProperties) => {
        setStore({ planetsProperties });
      },

      //vehiculos.............................................................................
      setVehicles: (vehicles) => {
        setStore({ vehicles: vehicles });
      },
      getVechicle: (uid) => {
        for (let i = 0; i < vehicles.length; i++) {
          if (vehicles[i].uid === uid) {
            return vehicles[i];
          }
        }
      },
      setVehicleProperties: (vehicleProperties) => {
        setStore({ vehicleProperties });
      },
      //NO TOCAR CODIGO.................................................

      listarFavorites: () => {
        const store = getStore();
        return store.favorites;
      },

      saveFavorite: (name) => {
        const store = getStore();
        const newFavorite = {};
        newFavorite.name = name;
        const auxFavorites = [...store.favorites, newFavorite]; //faltaba el actualizar el renderizado.

        setStore({ favorites: auxFavorites });
      },
      deleteFavorites: (name) => {
        const store = getStore();
        const data = store.favorites.filter((item) => item.name !== name);
        setStore({ ...store, favorites: data });
      },
      numFavorites: () => {
        const store = getStore();
        return store.favorites.length;
      },
    },
  };
};

export default getState;
