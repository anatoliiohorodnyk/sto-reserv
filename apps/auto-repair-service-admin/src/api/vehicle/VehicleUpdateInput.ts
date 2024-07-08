import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { AppointmentUpdateManyWithoutVehiclesInput } from "./AppointmentUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  make?: string | null;
  model?: string | null;
  year?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutVehiclesInput;
};
