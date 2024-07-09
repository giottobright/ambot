import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BeerAvailabilityTitle } from "../beerAvailability/BeerAvailabilityTitle";

export const BeerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
