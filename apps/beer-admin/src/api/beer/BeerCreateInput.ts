import { BeerAvailabilityCreateNestedManyWithoutBeersInput } from "./BeerAvailabilityCreateNestedManyWithoutBeersInput";

export type BeerCreateInput = {
  abv?: number | null;
  name?: string | null;
  typeField?: "Option1" | null;
  beerAvailabilities?: BeerAvailabilityCreateNestedManyWithoutBeersInput;
};
