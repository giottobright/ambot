import { SortOrder } from "../../util/SortOrder";

export type BeerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  abv?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
};
