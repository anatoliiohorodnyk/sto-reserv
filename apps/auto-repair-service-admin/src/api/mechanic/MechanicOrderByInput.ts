import { SortOrder } from "../../util/SortOrder";

export type MechanicOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  phoneNumber?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
};
