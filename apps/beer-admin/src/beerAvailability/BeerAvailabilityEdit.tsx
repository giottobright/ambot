import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BeerTitle } from "../beer/BeerTitle";
import { BarTitle } from "../bar/BarTitle";

export const BeerAvailabilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Availability" source="availability" />
        <ReferenceInput source="beer.id" reference="Beer" label="Beer">
          <SelectInput optionText={BeerTitle} />
        </ReferenceInput>
        <ReferenceInput source="bar.id" reference="Bar" label="Bar">
          <SelectInput optionText={BarTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
