import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  CharacterContainer,
  CharacterImage,
  CharacterName,
} from "./Characters.styles";

interface CharacterProps {
  id: number;
  name: string;
  coverImg: string;
}

const Character = ({ id, name, coverImg }: CharacterProps) => {
  const navigate = useNavigate();
  return (
    <CharacterContainer>
      <div onClick={() => navigate(`/character/${id}`)}>
        <CharacterImage src={coverImg} />
        <CharacterName>{name}</CharacterName>
      </div>
    </CharacterContainer>
  );
};

export default Character;
