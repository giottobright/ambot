import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { BAR_TITLE_FIELD } from "./BarTitle";
import { BEER_TITLE_FIELD } from "../beer/BeerTitle";

export const BarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="Address" source="address" />
        <ReferenceManyField
          reference="Location"
          target="barId"
          label="Locations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Longitude" source="longitude" />
            <TextField label="Latitude" source="latitude" />
            <ReferenceField label="Bar" source="bar.id" reference="Bar">
              <TextField source={BAR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BeerAvailability"
          target="barId"
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
