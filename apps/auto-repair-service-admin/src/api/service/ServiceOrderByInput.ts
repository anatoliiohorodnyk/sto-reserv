import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
};
