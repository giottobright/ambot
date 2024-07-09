import { LocationCreateNestedManyWithoutBarsInput } from "./LocationCreateNestedManyWithoutBarsInput";
import { BeerAvailabilityCreateNestedManyWithoutBarsInput } from "./BeerAvailabilityCreateNestedManyWithoutBarsInput";

export type BarCreateInput = {
  name?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  locations?: LocationCreateNestedManyWithoutBarsInput;
  beerAvailabilities?: BeerAvailabilityCreateNestedManyWithoutBarsInput;
};
