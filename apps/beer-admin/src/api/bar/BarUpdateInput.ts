import { LocationUpdateManyWithoutBarsInput } from "./LocationUpdateManyWithoutBarsInput";
import { BeerAvailabilityUpdateManyWithoutBarsInput } from "./BeerAvailabilityUpdateManyWithoutBarsInput";

export type BarUpdateInput = {
  name?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  locations?: LocationUpdateManyWithoutBarsInput;
  beerAvailabilities?: BeerAvailabilityUpdateManyWithoutBarsInput;
};
