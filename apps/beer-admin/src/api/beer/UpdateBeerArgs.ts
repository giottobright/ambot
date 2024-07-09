import { BeerWhereUniqueInput } from "./BeerWhereUniqueInput";
import { BeerUpdateInput } from "./BeerUpdateInput";

export type UpdateBeerArgs = {
  where: BeerWhereUniqueInput;
  data: BeerUpdateInput;
};
