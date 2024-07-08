import { Mechanic as TMechanic } from "../api/mechanic/Mechanic";

export const MECHANIC_TITLE_FIELD = "name";

export const MechanicTitle = (record: TMechanic): string => {
  return record.name?.toString() || String(record.id);
};
