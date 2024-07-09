import { BeerAvailabilityWhereInput } from "./BeerAvailabilityWhereInput";
import { BeerAvailabilityOrderByInput } from "./BeerAvailabilityOrderByInput";

export type BeerAvailabilityFindManyArgs = {
  where?: BeerAvailabilityWhereInput;
  orderBy?: Array<BeerAvailabilityOrderByInput>;
  skip?: number;
  take?: number;
};
