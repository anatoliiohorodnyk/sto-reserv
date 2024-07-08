import { Vehicle } from "../vehicle/Vehicle";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  vehicles?: Array<Vehicle>;
};
