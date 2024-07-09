import { BeerWhereUniqueInput } from "../beer/BeerWhereUniqueInput";
import { BarWhereUniqueInput } from "../bar/BarWhereUniqueInput";

export type BeerAvailabilityUpdateInput = {
  availability?: boolean | null;
  beer?: BeerWhereUniqueInput | null;
  bar?: BarWhereUniqueInput | null;
};
