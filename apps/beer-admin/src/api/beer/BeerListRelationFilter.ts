import { BeerWhereInput } from "./BeerWhereInput";

export type BeerListRelationFilter = {
  every?: BeerWhereInput;
  some?: BeerWhereInput;
  none?: BeerWhereInput;
};
