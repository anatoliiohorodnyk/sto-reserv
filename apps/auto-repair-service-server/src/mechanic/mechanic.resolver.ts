import * as graphql from "@nestjs/graphql";
import { MechanicResolverBase } from "./base/mechanic.resolver.base";
import { Mechanic } from "./base/Mechanic";
import { MechanicService } from "./mechanic.service";

@graphql.Resolver(() => Mechanic)
export class MechanicResolver extends MechanicResolverBase {
  constructor(protected readonly service: MechanicService) {
    super(service);
  }
}
