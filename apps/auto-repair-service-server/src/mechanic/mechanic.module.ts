import { Module } from "@nestjs/common";
import { MechanicModuleBase } from "./base/mechanic.module.base";
import { MechanicService } from "./mechanic.service";
import { MechanicController } from "./mechanic.controller";
import { MechanicResolver } from "./mechanic.resolver";

@Module({
  imports: [MechanicModuleBase],
  controllers: [MechanicController],
  providers: [MechanicService, MechanicResolver],
  exports: [MechanicService],
})
export class MechanicModule {}
