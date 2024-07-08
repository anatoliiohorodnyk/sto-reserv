import { AppointmentCreateNestedManyWithoutServicesInput } from "./AppointmentCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  appointments?: AppointmentCreateNestedManyWithoutServicesInput;
};
