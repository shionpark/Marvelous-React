import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface CharacterDetailProps {
  name: string;
  coverImg: string;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  name,
  coverImg,
}) => {
  return (
    <>
      <img src={coverImg} />
      <h1>{name}</h1>
    </>
  );
};

export default CharacterDetail;
