import React, { useEffect, useState } from "react";
import { API_URL, MarvelCharacter } from "../configs/commonConfig";
import { Loading, CharactersContainer } from "./Characters.styles";
import Character from "./Character";

function Characters() {
  const LIMIT_PARAMS = "?limit=10&orderBy=modified&series=24229,1058,2023";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MarvelCharacter[]>([]);

  const getData = async () => {
    const json = await (
      await fetch(`${API_URL}/characters${LIMIT_PARAMS}`)
    ).json();
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
              characterId={item.id}
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
