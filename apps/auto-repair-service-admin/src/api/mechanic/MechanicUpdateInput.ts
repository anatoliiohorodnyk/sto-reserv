import { AppointmentUpdateManyWithoutMechanicsInput } from "./AppointmentUpdateManyWithoutMechanicsInput";

export type MechanicUpdateInput = {
  phoneNumber?: string | null;
  name?: string | null;
  email?: string | null;
  appointments?: AppointmentUpdateManyWithoutMechanicsInput;
};
