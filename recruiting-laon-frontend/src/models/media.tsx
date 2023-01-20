import { IActor } from "./actor";
import { IAward } from "./award";
import { IDirector } from "./director";
import { IGenre } from "./genre";
import { IMovie } from "./movie";
import { IRating } from "./rating";
import { ISerie } from "./serie";

export interface IMedia {
  id?: number;
  title?: string;
  title_portuguese?: string;
  synopsis?: string;
  year?: number;
  trailer_url?: string;
  poster_url?: string;
  awards?: IAward[];
  actors?: IActor[];
  genres?: IGenre[];
  directors?: IDirector[];
  ratings?: IRating[];
  serie?: ISerie;
  movie?: IMovie;
}
