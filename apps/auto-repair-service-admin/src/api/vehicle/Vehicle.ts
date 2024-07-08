import { Customer } from "../customer/Customer";
import { Appointment } from "../appointment/Appointment";

export type Vehicle = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  make: string | null;
  model: string | null;
  year: number | null;
  customer?: Customer | null;
  appointments?: Array<Appointment>;
};
