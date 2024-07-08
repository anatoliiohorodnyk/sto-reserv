import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  year?: SortOrder;
  customerId?: SortOrder;
};
