import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { MechanicWhereUniqueInput } from "../mechanic/MechanicWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  status?: "Option1" | null;
  vehicle?: VehicleWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
  mechanic?: MechanicWhereUniqueInput | null;
};
