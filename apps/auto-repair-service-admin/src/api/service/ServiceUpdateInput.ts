import { AppointmentUpdateManyWithoutServicesInput } from "./AppointmentUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  appointments?: AppointmentUpdateManyWithoutServicesInput;
};
