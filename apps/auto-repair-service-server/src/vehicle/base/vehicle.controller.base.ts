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
import { VehicleService } from "../vehicle.service";
import { VehicleCreateInput } from "./VehicleCreateInput";
import { Vehicle } from "./Vehicle";
import { VehicleFindManyArgs } from "./VehicleFindManyArgs";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";
import { VehicleUpdateInput } from "./VehicleUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";

export class VehicleControllerBase {
  constructor(protected readonly service: VehicleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vehicle })
  async createVehicle(
    @common.Body() data: VehicleCreateInput
  ): Promise<Vehicle> {
    return await this.service.createVehicle({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        make: true,
        model: true,
        year: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Vehicle] })
  @ApiNestedQuery(VehicleFindManyArgs)
  async vehicles(@common.Req() request: Request): Promise<Vehicle[]> {
    const args = plainToClass(VehicleFindManyArgs, request.query);
    return this.service.vehicles({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        make: true,
        model: true,
        year: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async vehicle(
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Vehicle | null> {
    const result = await this.service.vehicle({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        make: true,
        model: true,
        year: true,

        customer: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVehicle(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() data: VehicleUpdateInput
  ): Promise<Vehicle | null> {
    try {
      return await this.service.updateVehicle({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          make: true,
          model: true,
          year: true,

          customer: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVehicle(
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Vehicle | null> {
    try {
      return await this.service.deleteVehicle({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          make: true,
          model: true,
          year: true,

          customer: {
            select: {
              id: true,
            },
          },
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
    @common.Param() params: VehicleWhereUniqueInput
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
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  async updateAppointments(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  async disconnectAppointments(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }
}