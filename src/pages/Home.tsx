import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface MarvelCharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MarvelCharacter[]>([]);

  let { id } = useParams();

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
  console.log(data);

  return (
    <>
      <h1>Marvel Characters</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {data.map((item) => (
            <Link to={`/character/${item.id}`} key={item.id}>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
              <h2>{item.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
