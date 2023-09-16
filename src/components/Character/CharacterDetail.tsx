import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { CharacterDetailProps, CharacterDetails } from "@/types";

import {
  ImageAndTitleWrapper,
  DetailImg,
  DetailTitle,
  DetailGenres,
} from "./Characters.styles";

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  name,
  coverImg,
  comics,
  series,
  stories,
  events,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CharacterDetails | null>(null);

  const getData = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/comics/33660`
        // "resourceURI": "http://gateway.marvel.com/v1/public/comics/33660",
      )
    ).json();
    const data = json.data.results[0];
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <>
      <ImageAndTitleWrapper>
        <DetailImg src={coverImg} />
        <DetailTitle>{name}</DetailTitle>
      </ImageAndTitleWrapper>
      {loading ? "Loading..." : <p>{data?.description}</p>}
      <div>
        <DetailGenres>Comics</DetailGenres>
        {comics.map((i: any, index: number) => (
          <li key={index}>{i.name}</li> // 고유한 key 값을 index로 설정
        ))}
      </div>
      <div>
        <DetailGenres>Stories</DetailGenres>
        {stories.map((i: any, index: number) => (
          <li key={index}>{i.name}</li> // 고유한 key 값을 index로 설정
        ))}
      </div>
      <div>
        <DetailGenres>Series</DetailGenres>
        {series.map((i: any, index: number) => (
          <li key={index}>{i.name}</li> // 고유한 key 값을 index로 설정
        ))}
      </div>
      <div>
        <DetailGenres>Events</DetailGenres>
        {events.map((i: any, index: number) => (
          <li key={index}>{i.name}</li> // 고유한 key 값을 index로 설정
        ))}
      </div>
    </>
  );
};

export default CharacterDetail;
