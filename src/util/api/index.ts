import {
  API_URL,
  LIMIT_PARAMS_CHARACTERS,
  LIMIT_PARAMS_GENRES,
} from "@/constants";

export const getCharacterList = () =>
  fetch(`${API_URL}${LIMIT_PARAMS_CHARACTERS}`);

export const getCharacter = (id: string | undefined) =>
  fetch(`${API_URL}/${id}`);

export const getComics = (id: string | undefined) =>
  fetch(`${API_URL}/${id}/comics${LIMIT_PARAMS_GENRES}`);

export const getSeries = (id: string | undefined) =>
  fetch(`${API_URL}/${id}/series${LIMIT_PARAMS_GENRES}`);

export const getStories = (id: string | undefined) =>
  fetch(`${API_URL}/${id}/stories${LIMIT_PARAMS_GENRES}`);

export const getEvents = (id: string | undefined) =>
  fetch(`${API_URL}/${id}/events${LIMIT_PARAMS_GENRES}`);

// const searchCharacter = (keyword: string) =>
//   fetch(
//     "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?nameStartsWith=" +
//       keyword
//   );
