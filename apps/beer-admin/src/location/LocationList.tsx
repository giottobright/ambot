import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BAR_TITLE_FIELD } from "../bar/BarTitle";

export const LocationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Locations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
