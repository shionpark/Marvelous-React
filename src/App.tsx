import React, { useEffect, useState } from "react";

interface MarvelCharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

function App() {
  const [data, setData] = useState<MarvelCharacter[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(
      "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
    );
    const jsonData = await response.json();
    const marvelData = jsonData.data.results;
    console.log(marvelData);
    setData(marvelData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Marvel Characters</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {data.map((i) => (
            <>
              <li key={i.id}>{i.name}</li>
              <img src={`${i.thumbnail.path}.${i.thumbnail.extension}`} />
            </>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
