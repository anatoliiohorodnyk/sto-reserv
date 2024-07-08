import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { VehicleTitle } from "../vehicle/VehicleTitle";
import { ServiceTitle } from "../service/ServiceTitle";
import { MechanicTitle } from "../mechanic/MechanicTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="mechanic.id"
          reference="Mechanic"
          label="Mechanic"
        >
          <SelectInput optionText={MechanicTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
