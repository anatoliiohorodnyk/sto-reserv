import { VehicleCreateNestedManyWithoutCustomersInput } from "./VehicleCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  vehicles?: VehicleCreateNestedManyWithoutCustomersInput;
};
