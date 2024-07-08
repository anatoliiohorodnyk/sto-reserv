import { Appointment } from "../appointment/Appointment";

export type Service = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  appointments?: Array<Appointment>;
};
