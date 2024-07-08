import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { MechanicWhereUniqueInput } from "../mechanic/MechanicWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  status?: "Option1";
  vehicle?: VehicleWhereUniqueInput;
  service?: ServiceWhereUniqueInput;
  mechanic?: MechanicWhereUniqueInput;
};
