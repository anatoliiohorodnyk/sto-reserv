import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutVehiclesInput } from "./AppointmentCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  make?: string | null;
  model?: string | null;
  year?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutVehiclesInput;
};
