import { BeerWhereInput } from "./BeerWhereInput";
import { BeerOrderByInput } from "./BeerOrderByInput";

export type BeerFindManyArgs = {
  where?: BeerWhereInput;
  orderBy?: Array<BeerOrderByInput>;
  skip?: number;
  take?: number;
};
