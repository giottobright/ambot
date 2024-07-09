import { Beer as TBeer } from "../api/beer/Beer";

export const BEER_TITLE_FIELD = "name";

export const BeerTitle = (record: TBeer): string => {
  return record.name?.toString() || String(record.id);
};
