import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LocationTitle } from "../location/LocationTitle";
import { BeerAvailabilityTitle } from "../beerAvailability/BeerAvailabilityTitle";

export const BarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <TextInput label="Address" multiline source="address" />
        <ReferenceArrayInput
          source="locations"
          reference="Location"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocationTitle} />
        </ReferenceArrayInput>
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
