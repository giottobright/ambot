import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { BEER_TITLE_FIELD } from "./BeerTitle";
import { BAR_TITLE_FIELD } from "../bar/BarTitle";

export const BeerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ABV" source="abv" />
        <TextField label="Name" source="name" />
        <TextField label="Type" source="typeField" />
        <ReferenceManyField
          reference="BeerAvailability"
          target="beerId"
          label="BeerAvailabilities"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
