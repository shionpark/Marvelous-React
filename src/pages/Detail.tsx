import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetail";

interface CharacterDetails {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

function Detail({}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CharacterDetails | null>(null);

  const getData = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setData(json.data.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : data ? (
        <CharacterDetail
          name={data.name}
          coverImg={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        />
      ) : null}
    </>
  );
}

export default Detail;
