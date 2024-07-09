import { Bar } from "../bar/Bar";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  longitude: number | null;
  latitude: number | null;
  bar?: Bar | null;
};
