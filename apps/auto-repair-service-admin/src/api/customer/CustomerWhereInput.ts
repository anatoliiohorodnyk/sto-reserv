import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  vehicles?: VehicleListRelationFilter;
};
