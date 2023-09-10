export const API_URL =
  "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters";

export interface CharacterDetailProps {
  name: string;
  coverImg: string;
  comics: any;
  series: any;
  stories: any;
  events: any;
}

export interface CharacterDetails {
  description: any;
}

export interface MarvelCharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface CharacterDetails {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: { items: any };
  series: { items: any };
  stories: { items: any };
  events: { items: any };
}
