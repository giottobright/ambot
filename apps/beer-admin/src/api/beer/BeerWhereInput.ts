import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BeerAvailabilityListRelationFilter } from "../beerAvailability/BeerAvailabilityListRelationFilter";

export type BeerWhereInput = {
  id?: StringFilter;
  abv?: FloatNullableFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  beerAvailabilities?: BeerAvailabilityListRelationFilter;
};
