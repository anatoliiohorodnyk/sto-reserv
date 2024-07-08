import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type MechanicWhereInput = {
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
