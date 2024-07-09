import { BeerAvailabilityUpdateManyWithoutBeersInput } from "./BeerAvailabilityUpdateManyWithoutBeersInput";

export type BeerUpdateInput = {
  abv?: number | null;
  name?: string | null;
  typeField?: "Option1" | null;
  beerAvailabilities?: BeerAvailabilityUpdateManyWithoutBeersInput;
};
