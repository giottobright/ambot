import { BeerAvailability as TBeerAvailability } from "../api/beerAvailability/BeerAvailability";

export const BEERAVAILABILITY_TITLE_FIELD = "id";

export const BeerAvailabilityTitle = (record: TBeerAvailability): string => {
  return record.id?.toString() || String(record.id);
};
