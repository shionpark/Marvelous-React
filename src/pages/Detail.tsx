import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, CharacterDetails } from "../configs/commonConfig";
import CharacterDetail from "../components/CharacterDetail";

function Detail({}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CharacterDetails | null>(null);

  const getData = async () => {
    const json = await (await fetch(`${API_URL}/${id}`)).json();
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
          comics={data.comics.items}
          series={data.series.items}
          stories={data.stories.items}
          events={data.events.items}
        />
      ) : null}
    </>
  );
}

export default Detail;
