import { Location } from "../location/Location";
import { BeerAvailability } from "../beerAvailability/BeerAvailability";

export type Bar = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  phoneNumber: string | null;
  address: string | null;
  locations?: Array<Location>;
  beerAvailabilities?: Array<BeerAvailability>;
};
