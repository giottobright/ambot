import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BarWhereUniqueInput } from "../bar/BarWhereUniqueInput";

export type LocationWhereInput = {
  id?: StringFilter;
  longitude?: FloatNullableFilter;
  latitude?: FloatNullableFilter;
  bar?: BarWhereUniqueInput;
};
