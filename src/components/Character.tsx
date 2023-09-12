import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CharacterContainer,
  CharacterImage,
  CharacterName,
} from "./Characters.styles";

const Character = ({
  characterId,
  name,
  coverImg,
}: {
  characterId: number;
  name: string;
  coverImg: string;
}) => {
  return (
    <CharacterContainer>
      <Link to={`/character/${characterId}`}>
        <CharacterImage src={coverImg} />
        <CharacterName>{name}</CharacterName>
      </Link>
    </CharacterContainer>
  );
};

export default Character;