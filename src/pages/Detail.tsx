import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, CharacterDetails } from "../configs/commonConfig";
import CharacterDetail from "../components/CharacterDetail";

function Detail() {
  const { characterId } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CharacterDetails | null>(null);
  const [comics, setComics] = useState([]);

  const getData = async () => {
    // 캐릭터 데이터
    const json = await (
      await fetch(`${API_URL}/characters/${characterId}`)
    ).json();
    console.log("Character : ", json.data.results[0]);
    setData(json.data.results[0]);

    // 캐릭터 장르 별 데이터 - 1. comic
    const LIMIT_PARAMS = "?limit=5&orderBy=modified";
    const jsonComics = await (
      await fetch(`${API_URL}/characters/${characterId}/comics${LIMIT_PARAMS}`)
    ).json();
    console.log("Comics : ", jsonComics.data.results);
    setComics(jsonComics.data.results);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1>{data?.name}</h1>
          {/* {data?.comics.items.map((item: any) => (
            <ul key={item.id}>
              <li>{item.name}</li>
            </ul>
          ))} */}
          <h2>1. Comic</h2>
          {comics.map((item: any) => (
            <ul key={item.id}>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
              <li>{item.title}</li>
              <p>{item.description}</p>
            </ul>
          ))}
        </>
      )}
    </>
  );
}

export default Detail;
