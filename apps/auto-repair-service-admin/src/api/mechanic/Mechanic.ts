import { Appointment } from "../appointment/Appointment";

export type Mechanic = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  phoneNumber: string | null;
  name: string | null;
  email: string | null;
  appointments?: Array<Appointment>;
};
