import { BarWhereUniqueInput } from "../bar/BarWhereUniqueInput";

export type LocationUpdateInput = {
  longitude?: number | null;
  latitude?: number | null;
  bar?: BarWhereUniqueInput | null;
};
