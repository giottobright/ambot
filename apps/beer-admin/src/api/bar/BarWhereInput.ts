import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { BeerAvailabilityListRelationFilter } from "../beerAvailability/BeerAvailabilityListRelationFilter";

export type BarWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  locations?: LocationListRelationFilter;
  beerAvailabilities?: BeerAvailabilityListRelationFilter;
};
