import { SortOrder } from "../../util/SortOrder";

export type BarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
};
