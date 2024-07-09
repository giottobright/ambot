import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { BEER_TITLE_FIELD } from "../beer/BeerTitle";
import { BAR_TITLE_FIELD } from "../bar/BarTitle";

export const BeerAvailabilityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BeerAvailabilities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="Availability" source="availability" />
        <ReferenceField label="Beer" source="beer.id" reference="Beer">
          <TextField source={BEER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Bar" source="bar.id" reference="Bar">
          <TextField source={BAR_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
