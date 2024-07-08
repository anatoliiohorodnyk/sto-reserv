import { MechanicWhereInput } from "./MechanicWhereInput";
import { MechanicOrderByInput } from "./MechanicOrderByInput";

export type MechanicFindManyArgs = {
  where?: MechanicWhereInput;
  orderBy?: Array<MechanicOrderByInput>;
  skip?: number;
  take?: number;
};
