import { Vehicle } from "../vehicle/Vehicle";
import { Service } from "../service/Service";
import { Mechanic } from "../mechanic/Mechanic";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  status?: "Option1" | null;
  vehicle?: Vehicle | null;
  service?: Service | null;
  mechanic?: Mechanic | null;
};
