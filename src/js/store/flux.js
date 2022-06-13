const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      characterProperties: {},
      favorites: [
        {
          uid: "1",
          name: "Luke Skywalker",
        },
        {
          uid: "2",
          name: "C-3PO",
        },
        {
          uid: "3",
          name: "R2-D2",
        },
      ],
      
    },
    actions: {
      setcharacters: (characters) => {
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
      
      listarFavorites:()=>{
        return favorites
      }
    },
  };
};

export default getState;
