export interface MarvelCharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface CharacterDetails {
  name: string;
  description: any;
}
