import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterDetails } from "@/types";
import {
  getCharacter,
  getComics,
  getSeries,
  getStories,
  getEvents,
} from "@/util/api";
import CharacterDetail from "@/components/CharacterDetail";

function Detail() {
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

    console.log("Character : ", json.data.results[0]);
    console.log("jsonComics: ", jsonComics);
    console.log("jsonSeries: ", jsonSeries);
    console.log("jsonStories: ", jsonStories);
    console.log("jsonEvents: ", jsonEvents.data.results);

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
          <h1>{data?.name}</h1>
          {/* {data?.comics.items.map((item: any) => (
            <ul key={item.id}>
              <li>{item.name}</li>
            </ul>
          ))} */}
          {/* <h2>1. Comic</h2>
          {comics.map((item: any) => (
            <ul key={item.id}>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
              <li>{item.title}</li>
              <p>{item.description}</p>
            </ul>
          ))}
          <h2>1. Comic</h2>
          {series.map((item: any) => (
            <ul key={item.id}>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
              <li>{item.title}</li>
              <p>{item.description}</p>
            </ul>
          ))}
          <h2>1. Comic</h2>
          {stories.map((item: any) => (
            <ul key={item.id}>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
              <li>{item.title}</li>
              <p>{item.description}</p>
            </ul>
          ))}
          <h2>1. Comic</h2>
          {comics.map((item: any) => (
            <ul key={item.id}>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
              <li>{item.title}</li>
              <p>{item.description}</p>
            </ul>
          ))} */}
        </>
      )}
    </>
  );
}

export default Detail;
