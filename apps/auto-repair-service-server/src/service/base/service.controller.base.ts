/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ServiceService } from "../service.service";
import { ServiceCreateInput } from "./ServiceCreateInput";
import { Service } from "./Service";
import { ServiceFindManyArgs } from "./ServiceFindManyArgs";
import { ServiceWhereUniqueInput } from "./ServiceWhereUniqueInput";
import { ServiceUpdateInput } from "./ServiceUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";

export class ServiceControllerBase {
  constructor(protected readonly service: ServiceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Service })
  async createService(
    @common.Body() data: ServiceCreateInput
  ): Promise<Service> {
    return await this.service.createService({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        price: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Service] })
  @ApiNestedQuery(ServiceFindManyArgs)
  async services(@common.Req() request: Request): Promise<Service[]> {
    const args = plainToClass(ServiceFindManyArgs, request.query);
    return this.service.services({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        price: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async service(
    @common.Param() params: ServiceWhereUniqueInput
  ): Promise<Service | null> {
    const result = await this.service.service({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        price: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateService(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() data: ServiceUpdateInput
  ): Promise<Service | null> {
    try {
      return await this.service.updateService({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          price: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteService(
    @common.Param() params: ServiceWhereUniqueInput
  ): Promise<Service | null> {
    try {
      return await this.service.deleteService({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          price: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: ServiceWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        status: true,

        vehicle: {
          select: {
            id: true,
          },
        },

        service: {
          select: {
            id: true,
          },
        },

        mechanic: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  async connectAppointments(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateService({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  async updateAppointments(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateService({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  async disconnectAppointments(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateService({
      where: params,
      data,
      select: { id: true },
    });
  }
}
