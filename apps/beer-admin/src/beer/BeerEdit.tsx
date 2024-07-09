import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BeerAvailabilityTitle } from "../beerAvailability/BeerAvailabilityTitle";

export const BeerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="ABV" source="abv" />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="typeField"
          label="Type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="beerAvailabilities"
          reference="BeerAvailability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BeerAvailabilityTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
