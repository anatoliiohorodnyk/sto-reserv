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
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { MECHANIC_TITLE_FIELD } from "../mechanic/MechanicTitle";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="status" source="status" />
        <ReferenceField label="Vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Mechanic"
          source="mechanic.id"
          reference="Mechanic"
        >
          <TextField source={MECHANIC_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
