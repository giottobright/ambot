import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BarTitle } from "../bar/BarTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Longitude" source="longitude" />
        <NumberInput label="Latitude" source="latitude" />
        <ReferenceInput source="bar.id" reference="Bar" label="Bar">
          <SelectInput optionText={BarTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
