import { BeerAvailability } from "../beerAvailability/BeerAvailability";

export type Beer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  abv: number | null;
  name: string | null;
  typeField?: "Option1" | null;
  beerAvailabilities?: Array<BeerAvailability>;
};
