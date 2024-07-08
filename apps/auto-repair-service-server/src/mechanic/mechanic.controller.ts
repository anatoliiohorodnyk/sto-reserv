import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MechanicService } from "./mechanic.service";
import { MechanicControllerBase } from "./base/mechanic.controller.base";

@swagger.ApiTags("mechanics")
@common.Controller("mechanics")
export class MechanicController extends MechanicControllerBase {
  constructor(protected readonly service: MechanicService) {
    super(service);
  }
}
