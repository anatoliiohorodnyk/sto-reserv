import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  status?: SortOrder;
  vehicleId?: SortOrder;
  serviceId?: SortOrder;
  mechanicId?: SortOrder;
};
