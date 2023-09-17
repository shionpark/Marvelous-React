import React, { useEffect, useState } from "react";
import {
  CharacterTitle,
  CharacterImg,
  GenreTitle,
  DetailContainer,
  DetailImg,
} from "./DetailsByGenre.styles";

interface GenreDetailsProps {
  items: any[];
  genre: string;
}

const GenreDetails = ({ items, genre }: GenreDetailsProps) => {
  return (
    <>
      <GenreTitle>{genre}</GenreTitle>
      {items.map((item) => (
        <DetailContainer>
          <DetailImg
            src={
              item.thumbnail
                ? `${item.thumbnail.path}.${item.thumbnail.extension}`
                : ""
            }
          />
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </DetailContainer>
      ))}
    </>
  );
};

export default GenreDetails;
