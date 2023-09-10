import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL, MarvelCharacter } from "../configs/commonConfig";
import {
  CharactersContainer,
  CharacterContainer,
  CharacterImage,
  CharacterName,
} from "./Characters.styles";

const Character = ({
  id,
  name,
  coverImg,
}: {
  id: number;
  name: string;
  coverImg: string;
}) => {
  return (
    <CharacterContainer>
      <Link to={`/character/${id}`}>
        <CharacterImage src={coverImg} />
        <CharacterName>{name}</CharacterName>
      </Link>
    </CharacterContainer>
  );
};

function Characters() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MarvelCharacter[]>([]);

  const getData = async () => {
    const json = await (
      await fetch(`${API_URL}?limit=50&orderBy=modified&series=24229,1058,2023`)
    ).json();
    setData(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CharactersContainer>
      {loading ? (
        <p>loading...</p>
      ) : (
        data.map((item) => (
          <Character
            key={item.id}
            id={item.id}
            name={item.name}
            coverImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          />
        ))
      )}
    </CharactersContainer>
  );
}

export default Characters;
