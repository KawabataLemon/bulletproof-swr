export type People = {
  name: string,
  gender: 'Male'| 'Female' | 'unknown' | 'n/a',
  birth_year: string,
  eye_color: string,
  hair_color: string,
  height: string,
  mass:  string,
  skin_color: string,
  homeworld: string,
  films: string[],
  species: string[],
  starships: string[],
  vehicles: string[],
  url: string,
  created: string,
  edited: string, 
}

export type PeopleResponse = {
  count: number,
  next: string |  null,
  previous: string | null,
  results: People[],
}