import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface CharacterDetailProps {
  name: string;
  coverImg: string;
  comics: any;
  series: any;
  stories: any;
  events: any;
}

interface CharacterDetails {
  description: any;
}

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
      <div>
        <img src={coverImg} />
        <h1>{name}</h1>
      </div>
      {loading ? "Loading..." : <p>{data?.description}</p>}
      <div>
        <h1>Comics</h1>
        {comics.map((i: any, index: number) => (
          <li key={index}>{i.name}</li> // 고유한 key 값을 index로 설정
        ))}
      </div>
      <div>
        <h1>Stories</h1>
        {stories.map((i: any, index: number) => (
          <li key={index}>{i.name}</li> // 고유한 key 값을 index로 설정
        ))}
      </div>
      <div>
        <h1>Series</h1>
        {series.map((i: any, index: number) => (
          <li key={index}>{i.name}</li> // 고유한 key 값을 index로 설정
        ))}
      </div>
      <div>
        <h1>Events</h1>
        {events.map((i: any, index: number) => (
          <li key={index}>{i.name}</li> // 고유한 key 값을 index로 설정
        ))}
      </div>
    </>
  );
};

export default CharacterDetail;
