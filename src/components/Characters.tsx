import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
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

interface MarvelCharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

function Characters() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MarvelCharacter[]>([]);

  const getData = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
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
