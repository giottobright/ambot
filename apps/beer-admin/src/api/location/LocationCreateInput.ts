import { BarWhereUniqueInput } from "../bar/BarWhereUniqueInput";

export type LocationCreateInput = {
  longitude?: number | null;
  latitude?: number | null;
  bar?: BarWhereUniqueInput | null;
};
