import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  longitude?: SortOrder;
  latitude?: SortOrder;
  barId?: SortOrder;
};
