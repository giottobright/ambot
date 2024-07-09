import { Bar as TBar } from "../api/bar/Bar";

export const BAR_TITLE_FIELD = "name";

export const BarTitle = (record: TBar): string => {
  return record.name?.toString() || String(record.id);
};
