import { AppointmentCreateNestedManyWithoutMechanicsInput } from "./AppointmentCreateNestedManyWithoutMechanicsInput";

export type MechanicCreateInput = {
  phoneNumber?: string | null;
  name?: string | null;
  email?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutMechanicsInput;
};
