/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumAppointmentStatus } from "./EnumAppointmentStatus";
import { Vehicle } from "../../vehicle/base/Vehicle";
import { Service } from "../../service/base/Service";
import { Mechanic } from "../../mechanic/base/Mechanic";

@ObjectType()
class Appointment {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumAppointmentStatus,
  })
  @IsEnum(EnumAppointmentStatus)
  @IsOptional()
  @Field(() => EnumAppointmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Vehicle,
  })
  @ValidateNested()
  @Type(() => Vehicle)
  @IsOptional()
  vehicle?: Vehicle | null;

  @ApiProperty({
    required: false,
    type: () => Service,
  })
  @ValidateNested()
  @Type(() => Service)
  @IsOptional()
  service?: Service | null;

  @ApiProperty({
    required: false,
    type: () => Mechanic,
  })
  @ValidateNested()
  @Type(() => Mechanic)
  @IsOptional()
  mechanic?: Mechanic | null;
}

export { Appointment as Appointment };
