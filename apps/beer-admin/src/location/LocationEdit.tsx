import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BarTitle } from "../bar/BarTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Longitude" source="longitude" />
        <NumberInput label="Latitude" source="latitude" />
        <ReferenceInput source="bar.id" reference="Bar" label="Bar">
          <SelectInput optionText={BarTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
