import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterDetails } from "@/types";
import {
  getCharacter,
  getComics,
  getSeries,
  getStories,
  getEvents,
} from "@/utils/api";
import { GenreDetails } from "@/components/CharacterDetail";

const Detail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CharacterDetails | null>(null);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [stories, setStories] = useState([]);
  const [events, setEvents] = useState([]);

  const getData = async () => {
    const json = await (await getCharacter(id)).json();
    const jsonComics = await (await getComics(id)).json();
    const jsonSeries = await (await getSeries(id)).json();
    const jsonStories = await (await getStories(id)).json();
    const jsonEvents = await (await getEvents(id)).json();

    setData(json.data.results[0]);
    setComics(jsonComics.data.results);
    setSeries(jsonSeries.data.results);
    setStories(jsonStories.data.results);
    setEvents(jsonEvents.data.results);
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
          <GenreDetails items={comics} genre="Comic" />
          <GenreDetails items={series} genre="Series" />
          <GenreDetails items={stories} genre="Stories" />
          <GenreDetails items={events} genre="Events" />
        </>
      )}
    </>
  );
};

export default Detail;
