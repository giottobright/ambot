import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BeerWhereUniqueInput } from "../beer/BeerWhereUniqueInput";
import { BarWhereUniqueInput } from "../bar/BarWhereUniqueInput";

export type BeerAvailabilityWhereInput = {
  id?: StringFilter;
  availability?: BooleanNullableFilter;
  beer?: BeerWhereUniqueInput;
  bar?: BarWhereUniqueInput;
};
