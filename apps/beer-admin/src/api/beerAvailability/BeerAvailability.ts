import { Beer } from "../beer/Beer";
import { Bar } from "../bar/Bar";

export type BeerAvailability = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  availability: boolean | null;
  beer?: Beer | null;
  bar?: Bar | null;
};
