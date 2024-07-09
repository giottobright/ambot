import { BarWhereInput } from "./BarWhereInput";
import { BarOrderByInput } from "./BarOrderByInput";

export type BarFindManyArgs = {
  where?: BarWhereInput;
  orderBy?: Array<BarOrderByInput>;
  skip?: number;
  take?: number;
};
