import { SortOrder } from "../../util/SortOrder";

export type BeerAvailabilityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  availability?: SortOrder;
  beerId?: SortOrder;
  barId?: SortOrder;
};
