import {
  BASE_URL,
  LIMIT_PARAMS_CHARACTERS,
  LIMIT_PARAMS_GENRES,
} from "@/constants";

export const getCharacterList = () =>
  fetch(`${BASE_URL}${LIMIT_PARAMS_CHARACTERS}`);

export const getCharacter = (id: string | undefined) =>
  fetch(`${BASE_URL}/${id}`);

export const getComics = (id: string | undefined) =>
  fetch(`${BASE_URL}/${id}/comics${LIMIT_PARAMS_GENRES}`);

export const getSeries = (id: string | undefined) =>
  fetch(`${BASE_URL}/${id}/series${LIMIT_PARAMS_GENRES}`);

export const getStories = (id: string | undefined) =>
  fetch(`${BASE_URL}/${id}/stories${LIMIT_PARAMS_GENRES}`);

export const getEvents = (id: string | undefined) =>
  fetch(`${BASE_URL}/${id}/events${LIMIT_PARAMS_GENRES}`);
