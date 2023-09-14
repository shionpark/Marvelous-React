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

export interface IMarvelContent {
  id?: number;
  name?: string;
  description?: string;
  modified?: string;
  thumbnail?: any;
  resourceURI?: string;
  comics?: any;
  series?: any;
  stories?: any;
  events?: any;
  urls?: URL[];
}
