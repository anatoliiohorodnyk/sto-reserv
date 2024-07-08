import { VehicleUpdateManyWithoutCustomersInput } from "./VehicleUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  vehicles?: VehicleUpdateManyWithoutCustomersInput;
};
