import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BeerTitle } from "../beer/BeerTitle";
import { BarTitle } from "../bar/BarTitle";

export const BeerAvailabilityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Availability" source="availability" />
        <ReferenceInput source="beer.id" reference="Beer" label="Beer">
          <SelectInput optionText={BeerTitle} />
        </ReferenceInput>
        <ReferenceInput source="bar.id" reference="Bar" label="Bar">
          <SelectInput optionText={BarTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
