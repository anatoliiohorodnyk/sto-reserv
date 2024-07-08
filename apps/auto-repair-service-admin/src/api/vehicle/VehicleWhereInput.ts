import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  year?: IntNullableFilter;
  customer?: CustomerWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
};
