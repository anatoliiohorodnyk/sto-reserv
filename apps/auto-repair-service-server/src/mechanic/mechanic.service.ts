import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MechanicServiceBase } from "./base/mechanic.service.base";

@Injectable()
export class MechanicService extends MechanicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
