import React, { useEffect, useState } from "react";
import { getCharacterList } from "@/utils/api";
import { MarvelCharacter } from "@/types";
import { Loading, CharactersContainer } from "./Characters.styles";
import Character from "./Character";

function Characters() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MarvelCharacter[]>([]);

  const getData = async () => {
    const json = await (await getCharacterList()).json();
    setData(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading>loading...</Loading>
      ) : (
        <CharactersContainer>
          {data.map((item) => (
            <Character
              key={item.id}
              id={item.id}
              name={item.name}
              coverImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            />
          ))}
        </CharactersContainer>
      )}
    </>
  );
}

export default Characters;
